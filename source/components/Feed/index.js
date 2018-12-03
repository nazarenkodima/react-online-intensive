// Core
import React, { Component } from 'react';

//Components
import { withProfile } from 'components/HOC/withProfile';
import  Catcher  from '../../components/Catcher';
import Statusbar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import { Spinner } from 'components/Spinner';


//Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';
import { api, TOKEN, GROUP_ID } from 'config/api';
import { socket } from '../../socket/init';

@withProfile
export default class Feed extends Component {
    state = {
        posts: [],
        isSpinning: false,
    }

    componentDidMount() {
        const { currentUserFirstName, currentUserLastName } = this.props;

        this._fetchPosts();

        socket.emit('join', GROUP_ID);

        socket.on('create', (postJSON) => {
            const { data: createdPost, meta } = JSON.parse(postJSON)
            
            if (`${currentUserFirstName} ${currentUserLastName}` !== `${meta.authorFirstName} ${meta.authorLastName}`) {
                this.setState(( {posts} )=> ({
                    posts: [createdPost, ...posts],
                }));
            }
        });

        socket.on('remove', (postJSON) => {
            const { data: removedPost, meta } = JSON.parse(postJSON)
           
            if (`${currentUserFirstName} ${currentUserLastName}` !== `${meta.authorFirstName} ${meta.authorLastName}`) {
                this.setState(( {posts} )=> ({
                    posts: posts.filter((post) => post.id !== removedPost.id)
                }));
            }
        });

        socket.on('like', (postJSON) => {
            const { data: likedPost, meta } = JSON.parse(postJSON);

            if (`${currentUserFirstName} ${currentUserLastName}` !== `${meta.authorFirstName} ${meta.authorLastName}`) {
                this.setState(({ posts } ) => ({
                    posts:  posts.map((post) => post.id === likedPost.id ? likedPost : post
                     ),
                }));
                console.log(likedPost.firstName)
            }
        });

        socket.on('join_error', (message) => {

            console.log(message)
        
           })
  
    }

    componentWillMount() {
        socket.removeListener('create');
        socket.removeListener('remove');
        socket.removeListener('like');
        socket.removeListener('join_error');
    }

    _setIsSpinningStatus = (status) =>  {
        this.setState({
            isSpinning: status,
        });
    }
    
    _fetchPosts = async () => {
        this._setIsSpinningStatus(true);

        const response = await fetch(api, {
            method: 'GET',
        });
        
        const { data : posts } = await response.json();
        this.setState({
            posts,
            isSpinning: false
        })
    }

     _createPost = async (comment) => {
         this._setIsSpinningStatus(true);

         const response = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: TOKEN,
            },
            body: JSON.stringify({ comment })
        });

        const { data: post } = await response.json();

         this.setState(({ posts }) => ({
             posts:      [ post, ...posts ],
             isSpinning: false,
         }));
     }

     _likePost = async (id) => {
        //  const { currentUserFirstName, currentUserLastName } = this.props;

         this._setIsSpinningStatus(true);

         const response = await fetch(`${api}/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: TOKEN,
            },
        });

        const { data: likedPost } = await response.json();
          

         this.setState(({ posts } ) => ({
             posts:  posts.map(
                 (post) => post.id === likedPost.id ? likedPost : post
              ),
             isSpinning: false,
         }));
     }

        _removePost = async (id) => {
            this._setIsSpinningStatus(true);

             await fetch(`${api}/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: TOKEN,
            },
        });
        this.setState(({ posts } ) => ({
            posts:  posts.filter((post) => post.id !== id),
            isSpinning: false,
        }));

        }

        render() {
            const { posts, isSpinning } = this.state;

            const postJSX = posts.map((post) => {
                return (
                    <Catcher key = { post.id}>
                    <Post
                        _likePost = { this._likePost }
                        _removePost = { this._removePost }
                        { ...post }
                    />
                    </Catcher>
                );
            });

            return (
                <section className = { Styles.feed }>
                    <Spinner isSpinning = { isSpinning } />
                    <Statusbar  />
                    <Composer  _createPost = { this._createPost } />
                    { postJSX }
                </section>
            );
        }
}
