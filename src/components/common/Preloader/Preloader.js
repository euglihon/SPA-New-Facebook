import React from 'react';
import preloaderSvg from '../../../assets/images/preloader.svg';

const Preloader = (props) => {
  return(
    <div>
      <img src={ preloaderSvg }/>
    </div>
  )
}

export default Preloader;
