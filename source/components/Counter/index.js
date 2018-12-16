// Core
import React from 'react';
import propTypes from 'prop-types';

//Instrumens
import Styles from './styles.m.css';

const Counter = ({count}) => (
    <section className = { Styles.counter }>Post count: { count }</section>
);

Counter.propTypes = {
    count: propTypes.number,
};

Counter.defaultProps = {
    count: 0,
};

export default Counter;
