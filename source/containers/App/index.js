// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

//Components
import Feed from 'components/Feed';

@hot(module)
export default class App extends Component {
    render() {
        return <Feed />;
    }
}
