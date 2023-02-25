import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
