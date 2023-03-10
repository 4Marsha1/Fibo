import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
    <Auth0Provider
        domain="dev-decrjzs0eos7it3q.us.auth0.com"
        clientId="WQbBouZMsSGVXVAvP3wNxES8q5gJzRJs"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);

