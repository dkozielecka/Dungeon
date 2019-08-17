import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './duck/store/store'
import App from './app/App';
import {SoundService, SoundServiceContext} from "./app/services/SoundsService";

ReactDOM.render(
    <Provider store={ store }>
        <SoundServiceContext.Provider value={new SoundService()}>
            <App />
        </SoundServiceContext.Provider>
    </Provider>
    , document.getElementById( 'root' ) );
