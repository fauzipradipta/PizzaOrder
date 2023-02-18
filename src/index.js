import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router} from 'react-router-dom';
import '../src/Style/App.css';
import '../src/Style/Menu.css';
import '../src/Style/ContactUs.css';
import '../src/Style/Navbar.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import cartReducer from './Component/Reducer/CartReducer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
