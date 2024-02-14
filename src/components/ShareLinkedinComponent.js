import React from 'react';
import { LinkedinShareButton, } from 'react-share';

const ShareLinkedinComponent = ({ url, title}) => {
    return (
        <LinkedinShareButton
            url={url}
            quote={title}
            className="Demo__some-network__share-button"
        >
            <img src='../.././images/icon/linkedin.svg' />
        </LinkedinShareButton>
    );
};

export default ShareLinkedinComponent;