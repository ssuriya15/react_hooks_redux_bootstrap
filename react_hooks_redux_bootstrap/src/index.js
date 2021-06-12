import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./store";

import Table from './Component/tableComponent'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <Table />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
