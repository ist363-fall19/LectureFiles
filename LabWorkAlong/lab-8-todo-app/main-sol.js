class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      var cached = localStorage.getItem("todos");
      if(cached) {
        this.state = { 
          items: JSON.parse(cached), 
          text: '' };
      } else {
        this.state = { 
          items: [
            {
              text: "Sample Todo",
              done: false
            }
          ], 
        text: '' };
      }
      this.updateText = this.updateText.bind(this);
      this.newTodo = this.newTodo.bind(this);
      this.itemDone = this.itemDone.bind(this);
      this.clearCompleted = this.clearCompleted.bind(this);
    }
    updateText(event) {
      event.preventDefault();
      this.setState({text: event.target.value})
    }
    newTodo(event) {
      event.preventDefault();
      if (this.state.text.trim() !== '') {
        var items = this.state.items;
        items.push({
          text: this.state.text,
          done: false
        });
        this.setState({items: items, text: ''});
        localStorage.setItem('todos', JSON.stringify(items));
      }
    }
    itemDone(item) {
      const items = this.state.items;
      for (var i = 0 ; i < items.length ; i++) {
        if (items[i].text == item.text) {
          items[i].done = !items[i].done;
        }
      }
      this.setState({items: items});
      localStorage.setItem('todos', JSON.stringify(items));
    }
    clearCompleted() {
      const items = this.state.items;
      const notDone = [];
      for (var i = 0 ; i < items.length ; i++) {
        if (!items[i].done) {
          notDone.push(items[i])
        }
      }
      this.setState({items: notDone});
      localStorage.setItem('todos', JSON.stringify(notDone));
    }
    render() {
      return (
        <div>
          <div className="bg-primary">
            <div className="container py-5">
              <form onSubmit={this.newTodo}>
                <div className="form-group">
                  <label className="text-white">Add a New Todo:</label>
                  <input type="text" value={this.state.text} onChange={this.updateText} className="form-control"></input>
                </div>
              </form>
            </div>
            </div>
            <div className="item-list container py-5">
              <h2>Your Todo List</h2>
              <ul className="list-group list-group-flush my-5">
              {this.state.items.map((item) =>
                <TodoAppItem key={item.text} item={item} markDone={this.itemDone} />
              )}
              </ul>
              <button className="btn btn-warning" onClick={this.clearCompleted}>Clear Completed</button>
            </div>
        </div>
      );
    }
  }

  class TodoAppItem extends React.Component {
    constructor(props) {
      super(props);
      this.done = this.done.bind(this);
    }
    done() {
      this.props.markDone(this.props.item);
    }
    render() {
      return (
        <li className={this.props.item.done ? 'text-strikethrough list-group-item' : 'list-group-item'} onClick={this.done}>{ this.props.item.text }</li>
      );
    }
  }

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todoApp')
  );