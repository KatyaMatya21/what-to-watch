import React, {Component} from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

class GenresList extends Component {
  _onClick(genre) {
    this.props.selectGenre(genre);
  }

  render() {
    const {
      movies,
      currentGenre
    } = this.props;

    const genres = [...new Set(movies.map((movie) => movie.genre))];

    return <ul className="catalog__genres-list">

      <li className={`catalog__genres-item ${currentGenre === false ? `catalog__genres-item--active` : ``}`}>
        <a className="catalog__genres-link"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            this._onClick(false);
          }}
        >
          All genres
        </a>
      </li>

      {
        genres.map((genre, i) => {
          return (
            <li className={`catalog__genres-item ${currentGenre === genre ? `catalog__genres-item--active` : ``}`}
              key={`genre-${i}`}
            >
              <a className="catalog__genres-link"
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this._onClick(genre);
                }}
              >
                {genre}
              </a>
            </li>
          );
        })
      }

    </ul>;
  }
}

GenresList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)).isRequired,
  currentGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  selectGenre: PropTypes.func.isRequired
};

export default GenresList;
