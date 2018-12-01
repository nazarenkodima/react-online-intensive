//Core
import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext({});

const withProfile = (Enhanceable) => {
    return class withProfile extends Component {
    static contextType = Consumer;

    render() {
        const { context } = this;

        return (
            <Enhanceable
                { ...context }
                { ...this.props }
            />
        );
    }
    };
};

export {Provider, Consumer, withProfile };
