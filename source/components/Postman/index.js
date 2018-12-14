// Core
import React from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

//Components
import { withProfile } from 'components/HOC/withProfile';

//Styles
import Styles from './styles.m.css';

const Postman = (props) => {
    const _animatePostmanEnter = (postman) => {
        fromTo(postman, 1, { x: 400}, { x: 0 });
    };

    const _animatePostmanExit = (postman) => {
        fromTo(postman, 1, { x: 0}, { x: 400 });
    };

    return (
        <Transition
            appear
            in
            timeout = { 5000 }
            onEnter = { _animatePostmanEnter }
            onEntered = { _animatePostmanExit }>
            <section className = { Styles.postman }>
                <img src = { props.avatar } />
                <span> Welcome online, {props.currentUserFirstName} </span>
            </section>
        </Transition>
    );
};

export default withProfile(Postman);
