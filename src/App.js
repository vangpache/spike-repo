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

        {this.props.test.map(each => {
          return (
            <>
          <p>{each.best_book.title._text}</p>
          <img src={each.best_book.image_url._text} alt="image of book" />
            </>
          )
        })}

        {/* {JSON.stringify(this.props.test)} */}
        
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return{
    test: reduxStore.books
  }
}


export default connect(mapStateToProps) (App);
