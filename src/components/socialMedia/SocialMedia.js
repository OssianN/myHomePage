import React from 'react';
import images from '../../images';
import './socialMedia.scss';

const SocialMedia = () => {
  return (
    <>
      <div className='externalLinksContainer'>
        <div className='externalLinksBlob'>
          {/* <img src={images.blob} alt='blob'></img> */}
        </div>
        <div className='social-media__inset-bubble'></div>
        <a href='https://github.com/OssianN'>
          <img src={images.git} alt='GitHub link' />
        </a>
        <a href='https://linkedin.com/in/ossian-nörthen'>
          <img src={images.linkedin} alt='LinkedIn link' />
        </a>
      </div>
    </>
  )
}

export default SocialMedia;