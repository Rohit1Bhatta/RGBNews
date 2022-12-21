import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import NavBar from './Components/NavBar';
import NewsComponent from './Components/NewsComponent';
import {
  BrowserRouter as Router,
  Route,
  // RouterProvider,
  Routes,
} from "react-router-dom";

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
class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
  };
}
  pageSize=9;
  render() {
    return (
      <>
    <div>
      <Router>
      <NavBar/>
        <Routes>
        <Route exact path='/'  element={<NewsComponent key="general"pageSize={this.pageSize} country={'in'} category={"general"}/>}/>
        <Route exact path='/business' element={<NewsComponent key="business" pageSize={this.pageSize} country={'in'} category={"business"}/>}/>
        <Route exact path='/entertainment' element={<NewsComponent key="entertainment" pageSize={this.pageSize} country={'in'} category={"entertainment"}/>}/>
        <Route exact path='/general' element={<NewsComponent key="general"  pageSize={this.pageSize} country={'in'} category={"general"}/>}/>
        <Route exact path='/health' element={<NewsComponent key="health" pageSize={this.pageSize} country={'in'} category={"health"}/>}/>
        <Route exact path='/science' element={<NewsComponent key="science" pageSize={this.pageSize} country={'in'} category={"science"}/>}/>
        <Route exact path='/sports' element={<NewsComponent key="sports" pageSize={this.pageSize} country={'in'} category={"sports"}/>}/>
        <Route exact path='/technology' element={<NewsComponent key="technology" pageSize={this.pageSize} country={'in'} category={"technology"}/>}/>
        </Routes>
      </Router>
    </div>
    </> );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;
// #endregion

export default App;