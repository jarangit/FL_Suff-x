import React from 'react';
import { FacebookShareButton, FacebookIcon } from 'react-share';

const ShareFacebookComponent = ({ url, title, image }) => {
    return (
        <FacebookShareButton
            url={url}
            quote={title}
            hashtag="#suffixworks"
            itemType='WebPage'
            className="Demo__some-network__share-button"
        >
            <img src='../.././images/icon/facebook.svg' />
        </FacebookShareButton>
    );
};

export default ShareFacebookComponent;