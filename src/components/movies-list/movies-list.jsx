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
    const {movies} = this.props;

    const movieList = movies.map((item, i) => {
      return (
        <Movie
          movie={item}
          key={i}
          onMouseEnter={() => this._onMouseEnter(item)}
          onMouseOut={() => this._onMouseOut()}
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
  movies: PropTypes.PropTypes.arrayOf(movieType).isRequired
};

export default MoviesList;
