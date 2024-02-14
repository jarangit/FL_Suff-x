import React from 'react';
import { TwitterShareButton } from 'react-share';

const ShareTwitterComponent = ({ url, title}) => {
    return (
        <TwitterShareButton
            url={url}
            quote={title}
            className="Demo__some-network__share-button"
        >
            <img src='../.././images/icon/twitter.svg' />
        </TwitterShareButton>
    );
};

export default ShareTwitterComponent;