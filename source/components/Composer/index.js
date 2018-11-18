// Core
import React, { Component } from 'react';

//Instrumens
import avatar from 'theme/assets/lisa';
import Styles from './styles.m.css';

export default class Composer extends Component {
    render() {
        return (
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { ' What\'s on your mind? ' } />
                    <input
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }
}
