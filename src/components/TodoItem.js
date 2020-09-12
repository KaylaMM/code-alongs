import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ todo, markComplete, delTodo }) => {
  const getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: todo.completed ? "line-through" : "none",
    };
  };

  const onChange = (event) => {
    event.preventDefault();
    markComplete(todo);
  };

  const onClick = (event) => {
    event.preventDefault();
    delTodo(todo);
  };

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={onChange} /> {todo.title}
        <button onClick={onClick} style={btnStyle}>
          x
        </button>
      </p>
    </div>
  );
};

//Prop Types
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
