import '@babel/polyfill';
import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './scripts/components/container/Root';
import {AppContainer} from 'react-hot-loader';
import configureStore from './scripts/store/configureStore';

export const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store}/>
    </AppContainer>,
    document.getElementById('main')
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./scripts/components/container/Root', () => {
    render(Root)
  });
}


