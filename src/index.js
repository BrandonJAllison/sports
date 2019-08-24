import React from 'react'
import ReactDOM from 'react-dom'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { applyMiddleware, createStore } from 'redux'
import App from './App'
import './index.css'
import reducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import { Auth0Provider } from "./utils/authZero"
import config from "./auth_config.json"

// A function that routes the user to the right place
// after login

const onRedirectCallback = appState => {
    window.history.replaceState(
        {},
        document.title,
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    )
}

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Auth0Provider
                domain={config.domain}
                client_id={config.clientId}
                redirect_uri={window.location.origin}
                onRedirectCallback={onRedirectCallback}
            >
                <App />
            </Auth0Provider>
        </Provider>
    </Router>,
    document.getElementById('root')
)
