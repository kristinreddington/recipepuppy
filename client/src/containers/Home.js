import React, { Component } from 'react';
import SearchBar from './SearchBar';


class Home extends Component {
  render() {
    return (
      <div className="container">
      <div className="row">
      <SearchBar />
    </div>
  </div>
    )
  }
}

export default Home;
