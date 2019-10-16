import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ImageUpload from './components/ImageUpload/ImageUpload';
import Moment from 'react-moment';
import swal from '@sweetalert/with-react';
import { withStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Paper } from '@material-ui/core';






class App extends Component {

  state = {
    search: '',
    pictures: []
  }

  //GET SEARCHED BOOKS
  handleSearch = (event) => {
    console.log('in search');
    this.setState({
      search: event.target.value
    })
    console.log('handleSearch:', this.state);
  }

  //SWEETALERT TO SEARCH GOODREADS DB
  handleClick = () => {
    console.log('in handleClick');
    swal({
      title: "This is a practice alert!",
      text: "Click ok to continue search or cancel",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("poof! Your search commences!", {
            icon: "success",
          })
          this.props.dispatch({
            type: 'GET_BOOKS_SEARCHED',
            payload: this.state.search
          })
        } else {
          swal("let us not search, then!");
        }
      })

    console.log('handleClick payload:', this.state.search);

  }

  //SAVE THE UPLOADED FILE IN THE STATE
  handleChange = (event) => {
    let file = event.target.files[0]
    this.setState({
      pictures: file
    })
    console.log(event.target.files[0]);
  }

  //DISPATCH THE FILE UPLOAD TO REDUX TO SEND TO SERVER
  handleFileUpload = () => {
    const data = new FormData();
    data.append('file', this.state.pictures)
    this.props.dispatch({
      type: 'UPLOAD_FILE',
      payload: data
    })
  }




  render() {

    return (
      <>
        <div className="App">
          <div className="navDiv">
          <h1>SPIKE APP</h1>
          <br />
          <div>
            <h3>spikes in this app</h3>
            <ul>
              <li>cloudinary: cloud file upload</li>
              <li>Good Reads API</li>
              <li>SweetAlert for React</li>
              <li>Material UI styling (Grids and Cards)</li>
              <li>Moment.js to format dates and times</li>
            </ul>
          </div>
          </div>
          <br />

          {/* {JSON.stringify(this.state)} */}

          {/* {JSON.stringify(this.props.test)} */}

          <div>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Grid item xs={12}>
                  <div className="cloudinaryDivs">
                    <h2><b>upload an image to cloudinary</b></h2>
                    <input type="file" name="file" onChange={this.handleChange} /><br />
                    <button onClick={this.handleFileUpload} >upload</button>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="cloudinaryDivs">
                    <h2><b>Displaying the image upload from cloudinary upload</b></h2>
                    <img className="image" src={this.props.upload}/>
                   
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="cloudinaryDivs">
                    <h2><b>Moment.js to reformat dates and time</b></h2>
                    <p><Moment format="LLLL">
                      1976-04-19T12:59-0500
                      </Moment></p>
                  </div>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <div>
                  <h2>Search books from Good Reads</h2>
                  <p><i>see a fun sweet alert pop up</i></p>
                  <input type="text" placeholder="search book title or author" onChange={this.handleSearch} />
                  <button onClick={this.handleClick}>search</button>

                  {this.props.test.map(each => {
                    return (
                      <>
                        <p>{each.best_book.title._text}</p>
                        <p>{each.best_book.author.name._text}</p>
                        <img src={each.best_book.image_url._text} alt="insert description of book here" />
                        <p>{each.original_publication_year._text}</p>
                      </>
                    )
                  })}
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    );
  }
}




const mapStateToProps = reduxStore => {
  return {
    test: reduxStore.books,
    upload: reduxStore.profilePicture
  }
}


export default connect(mapStateToProps)(App);
