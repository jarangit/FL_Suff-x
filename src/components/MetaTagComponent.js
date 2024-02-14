import React from 'react';
import MetaTags from 'react-meta-tags';

function MetaTagComponent({ title, description, url, imageUrl, imageAlt }) {
    let replaceTitle = title?.replace(/<[^>]+>/g, '');
    let replaceDescription = description?.replace(/<[^>]+>/g, '').substring(0, 160);
    let replaceImageAlt = imageAlt?.replace(/<[^>]+>/g, '');

    return (
        <MetaTags>
            <title>{replaceTitle}</title>
            <meta property="og:title" content={replaceTitle} />
            <meta name="description" content={replaceDescription} />
            <meta property="og:description" content={replaceDescription} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={replaceImageAlt} />
        </MetaTags>
    );
};

export default MetaTagComponent;