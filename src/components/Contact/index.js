import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Contact = () => (
    <div>
      Contact
    </div>
  );


export const mapStateToProps = (loading, error) => ({
  loading,
  error
});

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Contact);
