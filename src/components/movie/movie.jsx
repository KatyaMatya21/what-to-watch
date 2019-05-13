import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const {movie, onClick, onMouseEnter} = props;

  return <React.Fragment>

    <article className="small-movie-card catalog__movies-card" onMouseEnter={() => onMouseEnter(movie)}>
      <button className="small-movie-card__play-btn" type="button" onClick={() => onClick(movie)}>Play</button>
      <div className="small-movie-card__image">
        <img src={movie.src ? movie.src : `img/what-we-do-in-the-shadows.jpg`} alt={movie.title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={movie.link} onClick={() => onClick(movie)}>{movie.title}</a>
      </h3>
    </article>

  </React.Fragment>;
};

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string,
    link: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};

export default Movie;
