import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Projects extends Component {

  render() {
    return (
      <div>
        <h1>PROJECTS</h1>
      </div>
    )
  }
}

const mapStateToProps = (loading, error) => ({
  loading,
  error
})

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps)(Projects);
