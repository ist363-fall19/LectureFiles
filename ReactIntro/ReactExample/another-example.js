class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    title: "My Comment", 
                    content: "This is a comment"
                },
                {
                    title: "Comment 2",
                    content: "Another Comment"
                }
            ]
        }
    }
    render() {
        return(
            <div>
                {this.state.comments.map(comment => {
                    return (
                        <Comment comment={comment} />
                    )
                })}
            </div>
        )
    }
}

class Comment extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.comment.title}</div>
                <div>{this.props.comment.content}</div>
                <a href="#">Like this</a>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('myApp')
  );