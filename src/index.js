import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './ClassBasedComponents/components/TodoContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoContainer />
    {/* <App /> */}
  </React.StrictMode>,
);
