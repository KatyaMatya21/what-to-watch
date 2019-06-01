import React, {Component} from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

import Movie from '../movie/movie.jsx';

class MoviesList extends Component {
  _getMovie(movie) {
    const {activeItem, onClick, onMouseEnter, onMouseOut} = this.props;
    const isHovered = movie.id === activeItem;
    const _onMouseEnter = () => onMouseEnter(movie.id, 1000);

    return (
      <Movie
        movie={movie}
        key={movie.id}
        isHovered={isHovered}
        onClick={onClick}
        onMouseEnter={_onMouseEnter}
        onMouseOut={onMouseOut}
      />
    );
  }

  render() {
    const {movies, currentGenre} = this.props;

    const movieList = movies.map((movie) => {
      return (!currentGenre || currentGenre === movie.genre) && (
        this._getMovie(movie)
      );
    });

    return <div className="catalog__movies-list">
      {movieList}
    </div>;
  }
}

MoviesList.propTypes = {
  activeItem: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  movies: PropTypes.PropTypes.arrayOf(movieType).isRequired,
  currentGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired
};

export default MoviesList;
