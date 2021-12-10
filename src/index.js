import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import {FavouratesContextsProviders} from "./store/favourates-context"

ReactDOM.render(
    <div>
    <FavouratesContextsProviders>
        <Router>
            <App />
        </Router>
    </FavouratesContextsProviders>
    </div>
, document.getElementById('root'));
