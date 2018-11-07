import React, { Fragment } from 'react';
import ProgressiveImage from 'react-progressive-image';
import Loading from '../Loading';

const Image = ({ src, alt, className }) => (
  <ProgressiveImage
    src={src}
    placeholder="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
  >
    {(currentSrc, loading) => (
      <Fragment>
        {
            loading ? (<Loading/>) : (<img src={currentSrc} alt={alt} />)
        }
        
        <noscript>
          <img src={src} alt={alt} className={className} />
        </noscript>
      </Fragment>
    )}
  </ProgressiveImage>
);

export default Image;
