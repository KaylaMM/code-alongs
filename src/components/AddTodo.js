import React, { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const createTodo = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={createTodo} style={{ display: "flex" }}>
      <input
        type="text"
        name="todo"
        style={{ flex: "10", padding: "5px" }}
        placeholder="Add Todo..."
        value={todo}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
};

//Prop Types
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};



export default AddTodo;
