import React from 'react'; 

import Spinner from '../spinner/spinner.component'; 

import './with-spinner.styles.sass'; 

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ?  <Spinner/> : <WrappedComponent {...otherProps} />
};

export default WithSpinner;