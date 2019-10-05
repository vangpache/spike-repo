// import React from './node_modules/react';
import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';
import { connect } from 'react-redux';

class Image_uploader extends Component {

   state = {
       pictures: []
   }
    // constructor(props) {
    //     super(props);
    //     this.state = { pictures: [] };
    //     this.onDrop = this.onDrop.bind(this);
    // }

    onDrop = (picture) => {
        this.setState({
            // pictures: this.state.pictures.concat(picture),
            pictures: picture
        });
        console.log('in image onDrop:', this.state);
        this.props.dispatch({
            type: 'IMAGE_UPLOAD',
            payload: this.state
        })
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );

    }
}

const mapStateToProps = reduxStore => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps) (Image_uploader);