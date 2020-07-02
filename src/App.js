import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  handleSearch = (e) => {
    this.setState(
      {
        searchField: e.target.value,
      },
      () => console.log(this.state.searchField)
    );
  };

  render() {
    const { monsters, searchField } = this.state;
    const filtered = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          placeholder="Search monsters.."
          handleSearch={this.handleSearch}
        />
        <CardList monsters={filtered} />
      </div>
    );
  }
}

export default App;
