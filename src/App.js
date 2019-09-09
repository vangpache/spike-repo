import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  state = {
    search: ''
  }

  //GET SEARCHED BOOKS
  handleSearch = (event) => {
    console.log('in search');
    this.setState({
      search: event.target.value
    })
    console.log('handleSearch:', this.state);
  }

  handleClick = () => {
    console.log('in handleClick');
    this.props.dispatch({
      type: 'GET_BOOKS_SEARCHED',
      payload: this.state.search
    })
    console.log('handleClick payload:', this.state.search);

  }




  render() {
    return (
      <div className="App">
        <h2>book getter test</h2>
        <input type="text" placeholder="search book title or author" onChange={this.handleSearch} />
        <button onClick={this.handleClick}>search</button>
        
      </div>
    );
  }
}

export default connect() (App);
