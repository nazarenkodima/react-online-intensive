// Core
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

//Componnets
import { Consumer } from 'components/HOC/withProfile';

//Instrumens
import Styles from './styles.m.css';

export default class Post extends Component {
    static contextType = Consumer;

    static propTypes = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired,
    }

    render() {
        const { context } = this;
        const { comment, created } = this.props;

        return (
            <section className = { Styles.post }>
                <img src = { context.avatar } />
                <a> { context.currentUserFirstName } { context.currentUserLastName } </a>
                <time> { moment.unix(created).format('MMMM D h:mm:ss a') } </time>
                <p> { comment } </p>
            </section>

        );
    }
}
