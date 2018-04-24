import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/main.css';
import App from './modules/App/App';
import registerServiceWorker from './registerServiceWorker';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

fontawesome.library.add(brands, faEnvelope)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
