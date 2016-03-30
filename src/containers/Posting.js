import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setApp, setCategory, resetPosting } from '../actions';
import { Row, Col } from 'react-bootstrap';
import PostingForm from './PostingForm';

class Posting extends Component {
  componentWillMount() {
    this.props.setCategory(),
    this.props.setApp();
  }

  componentWillUnmount() {
    this.props.resetPosting();
  }

  render() {
    return <Row>
      <Col mdOffset={3} md={6} xsOffset={1} xs={10}><h2>New Posting</h2></Col>
      <Col><PostingForm/></Col>
    </Row>;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (id) => dispatch(setCategory('Posting')),
    setApp: () => dispatch(setApp('POSTING')),
    resetPosting: () => dispatch(resetPosting())
  };
};

export default connect(()=>({}), mapDispatchToProps)(Posting);