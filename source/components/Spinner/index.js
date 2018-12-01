// Core
import React from 'react';
import { createPortal } from 'react-dom';

//Instruments
import Styles from './styles.m.css';

const portal = document.getElementById('spinner');

export const Spinner = (props) => {
    const { isSpinning } = props;

    return createPortal(
        isSpinning ?  <div className = { Styles.spinner } /> : null, portal,
    );
};

