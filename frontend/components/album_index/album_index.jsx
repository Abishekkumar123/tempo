import React from 'react';
import { withRouter } from 'react-router';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllAlbums();
  }

  renderAlbum(album) {
    return (
      <div key={album.id} className='album-index-item'>
        <img className='album-index-image'
             onClick={ this.router.push(`/albums/${album.id}`)}
             src={album.image_url} />
      </div>
    );
  }

  render() {
    return (
      <div className='album-index'>
        { this.props.albums.map( album => this.renderAlbum(album) )}
      </div>
    );
  }
}

export default withRouter(AlbumIndex);
