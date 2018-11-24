// Core
import React, { Component } from 'react';
import moment from 'moment';

//Componnets
import { Consumer } from 'components/HOC/withProfile';

//Instrumens
import Styles from './styles.m.css';

export default class Post extends Component {
    static contextType = Consumer;

    render() {
        const { context } = this;

        return (
            <section className = { Styles.post }>
<<<<<<< HEAD
                <img src = { avatar } />
                <a> {currentUserFirstName} {currentUserLastName} </a>
||||||| merged common ancestors
                <img src = { avatar } />
                <a> {`${currentUserFirstName} ${currentUserLastName}`} </a>
=======
                <img src = { context.avatar } />
                <a> {`${context.currentUserFirstName} ${context.currentUserLastName}`} </a>
>>>>>>> react-online-lesson-4
                <time> {moment().format('MMMM D h:mm:ss a')} </time>
                <p> Hello! </p>
            </section>

        );
    }
}
