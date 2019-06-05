import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

import {VideoPlayerSize} from '../../constants/constants';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isLoading: true,
      isVideoPlaying: false
    };
  }

  render() {
    const {
      movie,
      width = VideoPlayerSize.WIDTH,
      height = VideoPlayerSize.HEIGHT
    } = this.props;

    return <video
      width={width}
      height={height}
      poster={`${movie.previewImage}`}
      muted={true}
      ref={this._videoRef}
    >
      <source src={movie.previewVideoLink} />
    </video>;
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    video.onplay = () => this.setState({
      isVideoPlaying: true
    });

    video.onpause = () => this.setState({
      isVideoPlaying: false
    });
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isHovered) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
  }

}

VideoPlayer.propTypes = {
  movie: movieType.isRequired,
  isHovered: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default VideoPlayer;
