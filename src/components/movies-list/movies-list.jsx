import React, {Component} from 'react';
import PropTypes from 'prop-types';
import movieType from '../../types/movie';

import Movie from '../movie/movie.jsx';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this.timer = null;

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseOut = this._onMouseOut.bind(this);
  }

  _onMouseEnter(movie) {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.setState({
        activeCard: movie.id
      });
    }, 1000);
  }

  _onMouseOut() {
    clearTimeout(this.timer);

    this.setState({
      activeCard: null
    });
  }

  render() {
    const {movies, currentGenre} = this.props;

    const movieList = movies.map((item, i) => {
      return (!currentGenre || currentGenre === item.genre) && (
        <Movie
          movie={item}
          key={i}
          onMouseEnter={this._onMouseEnter}
          onMouseOut={this._onMouseOut}
          isHovered={(item.id === this.state.activeCard)}
        />
      );
    });

    return <React.Fragment>

      <div className="catalog__movies-list">
        {movieList}
      </div>

    </React.Fragment>;
  }
}

MoviesList.propTypes = {
  movies: PropTypes.PropTypes.arrayOf(movieType).isRequired,
  currentGenre: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired
};

export default MoviesList;
