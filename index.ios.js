import React, { Component } from 'react';
import { AppRegistry, Navigator } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducer from './app/reducers';
import MainContainer from './app/containers/MainContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
  <Provider store = {store}>
    <Navigator
      initialRoute={{ component: MainContainer }}
      configureScene={(route, routeStack) => {
          return Navigator.SceneConfigs.FloatFromRight;
      }}
      renderScene={(route, navigator) => {
        let Component = route.component;
          return <Component {...route.params} navigator={navigator} />
      }} />
  </Provider>
);

AppRegistry.registerComponent('Tab', () => App);
