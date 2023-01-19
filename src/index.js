import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoContainer from './ClassBasedComponents/components/TodoContainer';
// import Header from './ClassBasedComponents/components/Header';
// import TodoItem from './ClassBasedComponents/components/TodoItem';
// import TodosList from './ClassBasedComponents/components/TodosList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <TodoContainer />
    {/* <TodoItem />
    <TodosList /> */}
    {/* <App /> */}
  </React.StrictMode>,
);
