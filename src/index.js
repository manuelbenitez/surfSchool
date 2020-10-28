import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore'
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase'
import fbConfig from './config/firebase'
import firebase from 'firebase/app'
import { CircularProgress } from '@material-ui/core';
//theme
import styles from './theme/theme'

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(fbConfig),
)
)

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  const theme = styles()
  if (!isLoaded(auth)) return <CircularProgress/>;
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
