import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        HOME
      </div>
    )
  }
}

export const mapStateToProps = (loading, error) => ({
  loading,
  error
});


// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(Home);
