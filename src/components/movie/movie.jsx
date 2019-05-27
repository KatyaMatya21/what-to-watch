import React from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

import VideoPlayer from '../video-player/video-player.jsx';

const Movie = (props) => {
  const {movie, onMouseEnter = () => {}, onMouseOut = () => {}, isHovered} = props;

  return <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnter(movie)} onMouseOut={() => onMouseOut()}>
    <div className="small-movie-card__image">
      <VideoPlayer
        movie={movie}
        isHovered={isHovered}
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href={movie.link}>{movie.title}</a>
    </h3>
  </article>;
};

Movie.propTypes = {
  movie: movieType.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseOut: PropTypes.func,
  isHovered: PropTypes.bool
};

export default Movie;
