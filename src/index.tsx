import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from './store';

// Components
import ScrollTotop from './components/ScrollToTop';
import App from './App';

// Style
import './index.scss';

const renderApp = () =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTotop>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </ScrollTotop>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
