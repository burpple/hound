import React, { Component } from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';

import MainApp from './apps/mainApp.js';
import configureStore from './store/configureStore.js';
import {setCounter} from './actions/counter.js';

const store = configureStore();

export default class MainAppRoot extends Component {
  componentWillMount() {
    store.dispatch(setCounter(this.props.counter || 0));
  }
  render() {
    return (
      <Provider store={store}>
        <MainApp />
      </Provider>
    );
  }
}