import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const ShareFacebookComponent = ({ url, title}) => {
    return (
        <FacebookShareButton
            url={url}
            quote={title}
            className="Demo__some-network__share-button"
        >
            <img src='../.././images/icon/facebook.svg' />
        </FacebookShareButton>
    );
};

export default ShareFacebookComponent;