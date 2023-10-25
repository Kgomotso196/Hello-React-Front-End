import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

function Index() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Index />);
