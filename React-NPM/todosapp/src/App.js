import React from 'react';
import './App.css';
import TodoItem from './TodoItem';


class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      items: [
        {
          text: "Todo 1",
          done: false
        }
      ]
    }
  }
  addItem = (evt) => {
    evt.preventDefault();
    var item = {
      text: this.state.inputText,
      done: false
    }
    var items = this.state.items;
    items.push(item)
    this.setState({items: items, inputText: ''});
  }
  onChange = (evt) => {
    this.setState({inputText: evt.target.value});
  }
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.addItem}>
            <label>Add a new Todo!</label>
            <input value={this.state.inputText} onChange={this.onChange} />
          </form>
        </div>
        <ul>
          {this.state.items.map(item => {
            return (
              <TodoItem item={item} />
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TodoApp;
