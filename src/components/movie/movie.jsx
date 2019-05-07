import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const {title, src, link} = props;

  return <React.Fragment>

    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src={src ? src : `img/what-we-do-in-the-shadows.jpg`} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={link ? link : `link.html`}>{title}</a>
      </h3>
    </article>

  </React.Fragment>;
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string,
  link: PropTypes.string
};

export default Movie;
