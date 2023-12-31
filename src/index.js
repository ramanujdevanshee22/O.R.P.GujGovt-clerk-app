import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import store from './redux-store/store';
import { Provider } from 'react-redux';
import { SocketContext, socket } from './context/socketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SocketContext.Provider value={socket}>
    <Provider store={store}>
      <App />
    </Provider>
  </SocketContext.Provider>
);
