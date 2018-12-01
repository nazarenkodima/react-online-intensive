// Core
import React, { Component } from 'react';
import moment from 'moment';

//Components
import Statusbar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import { Spinner } from 'components/Spinner';


//Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'instruments';


export default class Feed extends Component {
    constructor() {
        super();

        // this._createPost = this._createPost.bind(this);
        this._setIsSpinningStatus = this._setIsSpinningStatus.bind(this);
        this._likePost = this._likePost.bind(this);
        // this._removePost = this._removePost.bind(this);
    }

    state = {
        posts: [
            { id: '01', comment: 'Peace!', created: 1543083977, likes: [] },
            { id: '02', comment: 'Aloha!', created: 1543084339, likes: [] },
        ],
        isSpinning: false,
    }

    _setIsSpinningStatus(status) {
        this.setState({
            isSpinning: status,
        });
    }

     _createPost = async (comment) => {
         this._setIsSpinningStatus(true);
         const post = {
             id:      getUniqueID(),
             created: moment.now(),
             comment,
             likes:   [],
         };

         await delay(1200);

         this.setState(({ posts }) => ({
             posts:      [ post, ...posts ],
             isSpinning: false,
         }));
     }

     async _likePost (id) {
         const { currentUserFirstName, currentUserLastName } = this.props;

         this._setIsSpinningStatus(true);
         await delay(1200);
         const { posts } = this.state;
         const newPosts = posts.map((post) => {
             if (post.id === id) {
                 return {
                     ...post,
                     likes: [
                         {
                             id:        getUniqueID(),
                             firstName: currentUserFirstName,
                             lastName:  currentUserLastName,
                         },
                     ],
                 };
             }

             return post;
         });

         this.setState({
             posts:      newPosts,
             isSpinning: false,
         });
     }

        _removePost = async (id) => {
            this._setIsSpinningStatus(true);
            await delay(1200);

            const { posts } = this.state;

            const newPosts = posts.filter((post) => {
                return post.id !== id;
            });

            this.setState({
                posts:      newPosts,
                isSpinning: false,
            });
        }

        render() {
            const { posts, isSpinning } = this.state;

            const postJSX = posts.map((post) => {
                return (
                    <Post
                        _likePost = { this._likePost }
                        _removePost = { this._removePost }
                        key = { post.id }
                        { ...post }
                    />
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
