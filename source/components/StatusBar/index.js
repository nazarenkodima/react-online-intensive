// Core
import React, { Component } from 'react';

//Components
import { Consumer } from 'components/HOC/withProfile';

//Instrumens
import Styles from './styles.m.css';

export default class StatusBar extends Component {
    static contextType = Consumer;
    render() {
        const { context } = this;

        return (

            <section className = { Styles.statusBar }>
                <button>
                    <img src = { context.avatar } />
                    <span>{  context.currentUserFirstName }</span>
                    &nbsp;
                    <span>{  context.currentUserLastName }</span>
                </button>
            </section>

        );
    }
}
