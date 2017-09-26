import React from "react";

const NewTabLink = ({ url, children, className }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

export default NewTabLink;
