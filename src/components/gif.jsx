import React, { Component } from 'react';

class Gif extends Component {
  chooseGif = () => {
    this.props.chooseFunction(this.props.id)
  };

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.chooseGif}/>
    );
  }
}

export default Gif;
