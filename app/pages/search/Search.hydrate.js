import './Search.scss';
const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./Search');

ReactDOM.hydrate(<Search path={window.__PATH__} text={window.__INITIAL__.text} />, document.getElementById('root'));