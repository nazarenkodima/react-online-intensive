// Core
import React, { Component } from 'react';

//Components
import Statusbar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    render() {
        const {
            avatar, 
            currentUserFirstName,
            currentUserLastName,
        } = this.props;

        return (
            <section className = { Styles.feed }>
                <Statusbar { ...this.props } />
                <Composer 
                    avatar = { avatar }
                    currentUserFirstName = { currentUserFirstName }
                 />
                <Post { ...this.props } />
            </section>
        );
    }
}
