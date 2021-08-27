import React, { Component } from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar.jsx";
import ImageList from "./components/ImageList.jsx";

class App extends Component {
  state = {
    pictures: [],
    firstName: "",
  };

  renderImage = () => {
    return this.state.pictures.map((picture) => {
      return <img src={picture.urls.regular} alt={picture.alt_description} />;
    });
  };

  helperFunction = (text) => {
    this.setState({ firstName: text });
  };

  onSubmit = (term) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term,
        },
        headers: {
          Authorization:
            "Client-ID IW_clMhGk70hpn0l0ADnt7J0ZjWaMuPwg7XKsHlUObo",
        },
      })
      .then((res) => {
        this.setState({ pictures: res.data.results });
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-3 mb-5">Image Search Engine</h1>
        <h1 className="text-center mt-3 mb-5">
          First Name : {this.state.firstName}
        </h1>
        <h1 className="text-center mt-3 mb-5">
          Pictures : {this.state.pictures.length}
        </h1>

        <SearchBar
          helperFunction={this.helperFunction}
          onSubmit={this.onSubmit}
        />
        <ImageList firstName={this.state} pictures={this.state.pictures} />
      </div>
    );
  }
}

export default App;
