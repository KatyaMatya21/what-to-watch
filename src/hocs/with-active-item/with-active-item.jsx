import React, {PureComponent} from 'react';

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: false
      };

      this._onClick = this._onClick.bind(this);
      this._onMouseEnter = this._onMouseEnter.bind(this);
      this._onMouseOut = this._onMouseOut.bind(this);
    }

    _onClick(activeItem) {
      this.setState({activeItem});
    }

    _onMouseEnter(activeItem, timeout) {
      this._timerId = setTimeout(() => this.setState({activeItem}), timeout);
    }

    _onMouseOut() {
      clearTimeout(this._timerId);
      this.setState({activeItem: false});
    }

    render() {
      return <Component
        {...this.props}
        onClick={this._onClick}
        onMouseEnter={this._onMouseEnter}
        onMouseOut={this._onMouseOut}
        activeItem={this.state.activeItem}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};
