import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/todos?_limit=10 "
      );
      return setTodos(result.data);
    };
    fetchTodos();
  }, []);

  //Toggle Complete
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  //Delete Todo
  const delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => setTodos([...todos.filter((todo) => todo.id !== id)]))
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  //Add Todo
  const addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => setTodos([res.data, ...todos]))
      .catch((err) => {
        console.log("Error:", err);
      });
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={() => (
              <Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
