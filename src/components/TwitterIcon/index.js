import React from 'react';
import loaderSrc from '../../assets/twitter.png';

const TwitterIcon = props => (
    <div>
        <img
          style={{ width: 45 }}
          alt="loader icon"
          src={loaderSrc} />
    </div>
);

export default TwitterIcon;