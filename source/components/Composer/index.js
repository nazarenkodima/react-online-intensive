// Core
import React, { Component } from 'react';

//Componnets
import { Consumer } from 'components/HOC/withProfile';

//Instrumens
import Styles from './styles.m.css';

export default class Composer extends Component {
    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.composer }>
                        <img src = { context.avatar } />
                        <form>
                            <textarea placeholder = { `What\'s on your mind, ${context.currentUserFirstName}? ` } />
                            <input
                                type = 'submit'
                                value = 'Post'
                            />
                        </form>
                    </section>
                )}
            </Consumer>
        );
    }
}
