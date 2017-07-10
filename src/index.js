import React from 'react';
import ReactDOM from 'react-dom';
import 'antd'
import './app.css'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
