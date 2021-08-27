import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    this.props.helperFunction(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="form-group">
        <input
          type="text"
          placeholder="Type some words"
          className="form-control"
          onChange={(e) => {
            this.setState({ term: e.target.value });
          }}
        />
      </form>
    );
  }
}

export default SearchBar;
