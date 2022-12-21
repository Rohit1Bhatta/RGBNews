import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import loading from './loading.gif'

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
class Spinner extends React.Component {
constructor(props) {
    super(props);

    this.state = {
    };
}

    render() {
        return (
        <div className='text-center'>
        
        <img className= "my-3" src={loading} alt='loading' />
        
        </div>
        )
    }
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
// #endregion

export default Spinner;