import React from 'react'
import Loader from 'react-loader-spinner';

const LoaderAnimation = () => {
  const styles = {
    position: 'absolute',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
  }
  return (
    <Loader 
      type='Audio' 
      color="#0071bd"  
      style={styles}/>
  )
}

export default LoaderAnimation;
