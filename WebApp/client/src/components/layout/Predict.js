import React, { Component } from "react";
import ImageUploader from "react-images-upload";

export default class Predict extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    });
  }

  render() {
    return (
      <div>
        <ImageUploader
          withIcon={true}
          buttonText="Choose images"
          onChange={this.onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif", ".bmp"]}
          maxFileSize={5242880}
        />
        <h1 align="middle">Your result is</h1>
      </div>
    );
  }
}
