// Core
import React, { Component } from 'react';
import moment from 'moment';
import { func, string, number, array } from 'prop-types';

//Componnets
import Like  from 'components/Like';
import { Consumer } from 'components/HOC/withProfile';

//Instrumens
import Styles from './styles.m.css';

export default class Post extends Component {
    static contextType = Consumer;

    static propTypes = {
        _likePost: func.isRequired,
        comment:   string.isRequired,
        created:   number.isRequired,
        id:        string.isRequired,
        likes:     array.isRequired,

    }

    constructor() {
        super();

        this._removePost = this._removePost.bind(this);
    }

    _removePost() {
        const { _removePost, id } = this.props;
        _removePost(id);
    }

    render() {
        const { context } = this;
        const { comment, created, _likePost, id, likes} = this.props;

        return (
            <section className = { Styles.post }>
                <span
                    className = { Styles.cross }
                    onClick = { this._removePost }>
                </span>
                <img src = { context.avatar } />
                <a> { context.currentUserFirstName } { context.currentUserLastName } </a>
                <time> { moment.unix(created).format('MMMM D h:mm:ss a') } </time>
                <p> { comment } </p>
                <Like
                    _likePost = { _likePost }
                    id = { id }
                    likes = {  likes }
                    { ...context }>
                </Like>
            </section>

        );
    }
}
