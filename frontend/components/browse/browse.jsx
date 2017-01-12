import React from 'react';
import { Link } from 'react-router';

import ArtistIndexContainer from '../artist_index/artist_index_container';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="browse">
        <div className='browse-artist'>
          <Link to='/artists'>Artists</Link>
          <ArtistIndexContainer />
        </div>

        <div className='browse-albums'>
          <Link to='/albums'>Albums</Link>
        </div>

        <div className='browse-songs'>
          <Link to='/songs'>Songs</Link>
        </div>

        <div className='browse-playlists'>
          <Link to='/playlists'>Playlists</Link>
        </div>
      </div>
    );
  }
}

export default Browse;