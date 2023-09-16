import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  // add constructor and state here
  constructor(props) {
    super(props);
    this.state = {
      todos: [ //array
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  // function for adding text
  handleAdd = (text) => {
    this.setState((prev) => ({
      todos: [{ text }, ...prev.todos]
    }));
  };
  // function for removing text
  handleRemove = (text) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.text !== text);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form handleAdd = {this.handleAdd}/>
        <List todos = {this.state.todos}
              handleRemove = {this.handleRemove}/>
      </div>
    );
  }
}
