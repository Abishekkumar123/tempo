import React from 'react';

import ClassNames from 'classnames';

class Player extends React.Component {

  playPauseClass() {
    return ClassNames({
      'fa fa-play': this.props.playStatus === 'PLAYING' ? false : true,
      'fa fa-pause': this.props.playStatus === 'PLAYING' ? true : false
    });
  }

  render() {
    return (
      <div className='player'>

        <div className='player-song-image'>
          <img src={ this.props.currentSong.image_url } />
          <span>{ this.props.currentSong.title}</span>
        </div>

        <div className='player-main'>
          <div className='player-backward'>
            <button onClick={ this.props.backward }>
              <i className='fa fa-backward'></i>
            </button>
          </div>

          <div className='play-pause'>
            <button onClick={ this.props.togglePlay }>
              <i className={ this.playPauseClass() }></i>
            </button>
          </div>

          <div className='player-forward'>
            <button onClick={ this.props.forward }>
              <i className='fa fa-forward'></i>
            </button>
          </div>

        </div>

        <div className='player-random'>
          <button onClick={ () => this.props.shuffleQueue() }>
            <i className='fa fa-random'></i>
          </button>
        </div>

      </div>
    );
  }
}

export default Player;
