// Core
import React, { Component } from 'react';

//Components
import Statusbar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

import Styles from './styles.m.css';

export default class Feed extends Component {
    render() {
        return (
            <section className = { Styles.feed }>
                <Statusbar />
                <Composer />
                <Post />
            </section>
        );
    }
}
