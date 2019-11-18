class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                text: "Sample Todo",
                done: true
            },
            {
                text: "Sample Todo 2",
                done: false
            }],
            text: ''
        }
        this.updateText = this.updateText.bind(this);
        this.newTodo = this.newTodo.bind(this);
        this.itemDone = this.itemDone.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
    }
    updateText(evt) {
        this.setState({text: evt.target.value});
    }
    newTodo(evt) {
        if (this.state.text.trim() !== '') {
            evt.preventDefault();
            var items = this.state.items;
            items.push({
                text: this.state.text,
                done: false
            });
            this.setState({items: items, text: ''});
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
    }
    clearCompleted() {
        const items = this.state.items;
        const notDone = [];
        for (var i = 0 ; i < items.length ; i++) {
          if (!items[i].done) {
            notDone.push(items[i]);
          }
        }
        this.setState({items: notDone});
    }
    render() {
        return (
            <div className="bg-primary">
                <form onSubmit={this.newTodo}>
                    <label>Add a new Todo:</label>
                    <input value={this.state.text} type="text" onChange={this.updateText} />
                </form>
                <ul>
                    {this.state.items.map((item) => {
                        return (
                            <TodoItem key={item.text} item={item} markDone={this.itemDone} />
                        );
                    })}
                </ul>
                <button onClick={this.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

class TodoItem extends React.Component {
    render() {
        return(
            <li className={this.props.item.done ? 'text-strikethrough' : ''}
            onClick={() => this.props.markDone(this.props.item)}
            >
            { this.props.item.text }
            </li>
        )
    }
}

ReactDOM.render(
    <TodoApp />,
    document.getElementById("todoApp")

)