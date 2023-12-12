
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MetaDecorator from "./MetaDecorator";

const BlogMetaDecorator = ({ title, description, image, imageAlt }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    import(`uploads/uploads/thinks/${image}`).then((imageLink) => {
      setUrl(imageLink.default);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  return (
    <MetaDecorator imageUrl={url} title={title} description={description} imageAlt={imageAlt} />
  );
};

BlogMetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
};

export default BlogMetaDecorator;
