// Core
import React, { Component } from 'react';

//Instrumens
import avatar from 'theme/assets/lisa';
import Styles from './styles.m.css';

export default class StatusBar extends Component {
    render() {
        return (
            <section className = { Styles.statusBar }>
                <button>
                    <img src= { avatar } />
                    <span>Lisa</span>
                    &nbsp;
                    <span>Simpson</span>
                </button>
            </section>
        );
    }
}
