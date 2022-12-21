import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class NavBar extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return( <><div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">RGB NEWS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="/">Link</a>
        </li> */}
       <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/business">
        Business </Link></li>
       <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/entertainment">
        Entertainment</Link></li>
       <li className="nav-item"> 
          <Link className="nav-link " aria-current="page" to="/general">
        General</Link></li>
       <li  className="nav-item">
          <Link className="nav-link " aria-current="page" to="/health">
        Health </Link></li>
       <li  className="nav-item">
          <Link className="nav-link " aria-current="page" to="/science">
        Science</Link></li>
       <li  className="nav-item">
          <Link className="nav-link " aria-current="page" to="/sports">
        Sports</Link></li>
       <li  className="nav-item">
          <Link className="nav-link " aria-current="page" to="/technology">
        Technology </Link></li>
       
      </ul>
      
    </div>
  </div>
</nav>
        </div> </>);
    }
}

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
// #endregion

export default NavBar;