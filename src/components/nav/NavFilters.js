import React, { Component, PropTypes } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

class Filters extends Component {
  render() {
    const { app, sort, sortBy } = this.props;
    if (this.props.app == "BROWSE" || this.props.app == "ACCOUNT" || this.props.app == "SEARCH") {
      return <ButtonGroup>
        <Button bsStyle="default"
        title="newest posts"
        className="navbar-btn newpost"
        active={sort === 'newest'}
        onClick={() => sortBy('newest')}>
          <span className="glyphicon glyphicon-calendar" />
        </Button>
        <Button
        title="low to high"
        bsStyle="default"
        className="navbar-btn"
        active={sort === 'lowest_cost'}
        onClick={() => sortBy('lowest_cost')}>
          <span className="glyphicon glyphicon-sort-by-attributes"/>
        </Button>
        <Button
        title="high to low"
        bsStyle="default"
        className="navbar-btn"
        active={sort === 'highest_cost'}
        onClick={() => sortBy('highest_cost')}>
          <span className="glyphicon glyphicon-sort-by-attributes-alt"/>
        </Button>
      </ButtonGroup>;
    } else {
      return <div></div>;
    }
  }
}

Filters.propTypes = {
  app: PropTypes.string,
  sort: PropTypes.string,
  sortBy: PropTypes.func.isRequired
};

export default Filters;