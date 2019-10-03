import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'l2JhCz2jrE0VAl2Lu',
    }
  }

  search = (query) => {
    giphy('DJ3MVxy0f2Tb58zHhwqFTBoT5CCPbqI9').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  };

  choose = (clickedId) => {
    this.setState({
      selectedGifId: clickedId
    });
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}  />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} chooseFunction={this.choose} />
        </div>
      </div>
    );
  }
}

export default App;
