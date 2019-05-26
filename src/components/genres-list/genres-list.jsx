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

    return <React.Fragment>

      <ul className="catalog__genres-list">

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

      </ul>

    </React.Fragment>;
  }
}

GenresList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)),
  currentGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  selectGenre: PropTypes.func
};

export default GenresList;
