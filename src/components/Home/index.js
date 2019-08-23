import React from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/images/kzlogo.svg';
// import PropTypes from 'prop-types';

export const Home = () => (
  <main className='home-main'>
    <header>
      <img src={ logo } />
      <nav>
        <ul className='nav-ul'>
          <li className='nav-li'>logo</li>
          <li className='nav-li'>fb</li>
          <li className='nav-li'>tw</li>
          <li className='nav-li'>gh</li>
          <li className='nav-li'>resume</li>
          <li className='nav-li'>about me</li>
          <li className='nav-li'>contact</li>
          <li className='nav-li'>projects</li>
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
