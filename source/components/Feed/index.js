// Core
import React, { Component } from 'react';

//Components
import Statusbar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';


//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            {id: '01', comment: 'Peace!', created: 1543083977},
            {id: '02', comment: 'Aloha!', created: 1543084339},
            {id: '03', comment: 'Aloha!', created: 1543094699},

        ],
        isSpinning: false,
    }

    render() {
        const { posts, isSpinning } = this.state;

        const postJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning } />
                <Statusbar  />
                <Composer />
                { postJSX }
            </section>
        );
    }
}
