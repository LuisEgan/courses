// * import necessary packages
import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './views/App';

// * Render the main component into the div with id "root" in the DOM
// * which is set in ./public/index.html
ReactDOM.render(<App />, document.getElementById('root'));
