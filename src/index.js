import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; 
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title = 'This is a App title prop'/>, document.getElementById('root'));
registerServiceWorker();
