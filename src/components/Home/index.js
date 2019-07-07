import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Home = () => (


  <main className='home-main'>
    <header>
      <nav>
        <ul>
          <li>logo</li>
          <li>fb</li>
          <li>tw</li>
          <li>gh</li>
          <li>resume</li>
          <li>about me</li>
          <li>contact</li>
          <li>projects</li>
        </ul>
      </nav>
    </header>
  </main>
);

export const mapStateToProps = (loading, error) => ({
  loading,
  error
});


// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Home);
