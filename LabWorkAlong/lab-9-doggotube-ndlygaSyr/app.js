// You will have 4 Total Components one for each section

// Started the search component
class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>Search</div>
        );
    }
}

// Mount the search component
ReactDOM.render(
    <SearchComponent />,
    document.getElementById('searchComponent')
  );


// Create the rest of the components