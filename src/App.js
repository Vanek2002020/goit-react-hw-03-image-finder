import "./App.css";

import React, { Component } from "react";

import { Searchbar } from "components/Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    searchQuery: "",
  };
  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
    console.log(searchQuery);
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
