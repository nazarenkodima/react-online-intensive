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
                <img src = { context.avatar } />
                <a> {`${context.currentUserFirstName} ${context.currentUserLastName}`} </a>
                <time> {moment().format('MMMM D h:mm:ss a')} </time>
                <p> Hello! </p>
            </section>

        );
    }
}
