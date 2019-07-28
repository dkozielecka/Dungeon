import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './duck/store/store'
import World from './components/app/World';

ReactDOM.render(
    <Provider store={ store }>
        <World/>
    </Provider>
    , document.getElementById( 'root' ) );
