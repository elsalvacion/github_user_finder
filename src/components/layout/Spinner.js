import React, { Fragment } from 'react';
import spinner from './spinner.gif';
const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} className='d-block m-auto' />
    </Fragment>
  );
};

export default Spinner;
