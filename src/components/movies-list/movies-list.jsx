import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Movie from '../movie/movie.jsx';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };

    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onClick = this._onClick.bind(this);
  }

  _onClick(movie) {
    return movie;
  }

  _onMouseEnter(movie) {
    this.setState({
      activeCard: movie
    });
  }

  render() {
    const {movies} = this.props;

    const movieList = movies.map((item, i) => {
      return (
        <Movie
          movie={item}
          key={i}
          onClick={this._onClick}
          onMouseEnter={this._onMouseEnter}
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
  movies: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string,
    link: PropTypes.string
  })).isRequired,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func
};

export default MoviesList;
