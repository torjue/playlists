import React, { Component } from 'react';
import './App.css';
import playlists from './playlists.json';

class App extends Component {
  render() {
    return (
      <div className="entries">
        { playlists.map(playlist => 
          <div className="entry">
            <div className="info">
              <div className="author">{playlist.year}: {playlist.author}</div>
              <div className="title">{playlist.title}</div>
            </div>
            <div className="playlist">
              <iframe title={playlist.title} src={`https://open.spotify.com/embed?uri=spotify:playlist:${playlist.id}`} width="400px" height="350px" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
          </div>
        ) }
      </div>
    );
  }
}

export default App;
