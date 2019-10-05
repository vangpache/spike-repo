import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ImageUpload from './components/ImageUpload/ImageUpload';
import Moment from 'react-moment';
// import SweetAlert from 'sweetalert2-react';
// import { withSwalInstance } from 'sweetalert2-react';
import swal from '@sweetalert/with-react';


// const SweetAlert = withSwalInstance(swal);




class App extends Component {

  // componentDidMount() {
  //   swal(
  //     <div>
  //       <h1>Hello!</h1>
  //       <p>I am a React component inside a SweetAlert modal.</p>
  //     </div>
  //   )}

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
            swal("your imaginary file is safe!");
          }
        })
    
    console.log('handleClick payload:', this.state.search);

  }

  // onDrop = (picture) => {
  //   this.setState({
  //     pictures: this.state.pictures.concat(picture)
  //   })
  //   console.log('in onDrop:', this.state.pictures);
    
  // }

  handleChange = (event) => {
    let file = event.target.files[0]
    this.setState({
      pictures: file
    })
    console.log(event.target.files[0]);
  }

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
      <div className="App">
        <h1>SPIKE APP</h1>
        <br /><br /><br />
        <p><b>This uploader doesn't work, it' just looks pretty(react-images-upload)</b></p>
        <ImageUpload />
        <br /><br /><br />
        <div>
          <p><b>upload an image to cloudinary</b></p>
          <input type="file" name="file" onChange={this.handleChange} /><br/>
          <button onClick={this.handleFileUpload} >upload</button>
        </div>
        <br/><br/><br/>
        {/* {JSON.stringify(this.state)} */}
        <h2>book getter test</h2>
        <input type="text" placeholder="search book title or author" onChange={this.handleSearch} />
        <button onClick={this.handleClick}>search</button>
        <p><Moment format="LLLL">
          1976-04-19T12:59-0500
          </Moment></p>

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
        <br/>
        <br />
        <br />
        <div >
          <p><b>Displaying the url from cloudinary upload</b></p>
          <img className="image" src="http://res.cloudinary.com/dquorievt/image/upload/v1570288050/etakxagp8x8sbzqbmsy7.png" />
        </div>
        
          
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
