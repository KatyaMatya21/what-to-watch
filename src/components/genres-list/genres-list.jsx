import React, {Component} from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

class GenresList extends Component {
  _onClick(genre) {
    this.props.onClick(genre);
    this.props.selectGenre(genre);
  }

  render() {
    const {
      movies,
      activeItem
    } = this.props;

    const genres = [...new Set(movies.map((movie) => movie.genre))];

    return <ul className="catalog__genres-list">

      <li className={`catalog__genres-item ${activeItem === false ? `catalog__genres-item--active` : ``}`}>
        <button className="catalog__genres-link"
          type="button"
          onClick={() => {
            this._onClick(false);
          }}
        >
          All genres
        </button>
      </li>
      {
        genres.map((genre, i) => {
          return (
            <li className={`catalog__genres-item ${activeItem === genre ? `catalog__genres-item--active` : ``}`}
              key={`genre-${i}`}
            >
              <button className="catalog__genres-link"
                type="button"
                onClick={() => {
                  this._onClick(genre);
                }}
              >
                {genre}
              </button>
            </li>
          );
        })
      }
    </ul>;
  }
}

GenresList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)).isRequired,
  activeItem: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  selectGenre: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default GenresList;
