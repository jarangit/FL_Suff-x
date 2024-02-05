import React from 'react';
import { Helmet } from 'react-helmet-async';

function ThinksPost({ title, description, canonicalUrl }) {
    return (
        <div>
            <Helmet>
                <title>{title} | My Blog</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalUrl} />
            </Helmet>

            {/* Rest of your blog post content */}
        </div>
    );
}

export default ThinksPost;