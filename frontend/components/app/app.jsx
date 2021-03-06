import React from 'react';
import { withRouter, Link } from 'react-router';

import Sidebar from './sidebar';
import Search from '../search';
import CurrentSong from '../current_song';
import Popup from '../popup/popup';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showSearch: false
    };

    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentDidMount() {
    this._redirectUnlessLoggedIn();
  }

  componentDidUpdate() {
    this._redirectUnlessLoggedIn();
  }

  _redirectUnlessLoggedIn() {
    if(!this.props.loggedIn) {
      this.props.router.replace('/login');
    }
  }

  renderCurrentSong() {
    return (
      <div className='current-song'>
        <CurrentSong />
      </div>
    );
  }

  toggleSearch(e) {
    // e.preventDefault();
    this.setState({
      showSearch: !this.state.showSearch
    });

    $('#search').addClass('visible');
  }

  renderSearch() {
    if(this.state.showSearch) {
      return (
        <Search toggleSearch={ this.toggleSearch }/>
      );
    }
  }

  renderPopup() {
    if(this.props.popups[0]) {
      return (
        <div className='popup-container'>
          { this.props.popups.map( (popup, idx) =>  <Popup popup={ this.props.popups[idx] } removePopup={ this.props.removePopup } key={Math.random()}/>)}
        </div>
      );
    }
  }

  render() {
    if(this.props.currentUser) {

      return (
        <div className='main'>
          { this.renderSearch() }
          { this.renderPopup() }
          <div className=''>
            <Sidebar
              logout={ this.props.logout }
              toggleSearch={ this.toggleSearch }
              currentUser={this.props.currentUser} />
          </div>

          <div className='browse'>
            <nav className='browse-navbar'>
              <Link to='/artists'>Artists</Link>
              <Link to='/albums'>Albums</Link>
              <Link to='/playlists'>Playlists</Link>
            </nav>
            <div className='browse-main'>
              { this.props.children }
            </div>
          </div>
          { this.props.currentSong.song_url ? this.renderCurrentSong() : <div></div> }

        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default withRouter(App);
