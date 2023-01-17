import React from 'react';
import PropTypes from 'prop-types';

class TodosList extends React.PureComponent {
  render() {
    const {
      todos,
    } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = { todos: PropTypes.shape().isRequired };

export default TodosList;
