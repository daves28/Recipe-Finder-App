import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './client/components/App'
import styles from './client/styles.scss';

render(
    <App />,
  document.getElementById('root')
);
