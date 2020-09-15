import React from "react";
import "./Imagelist.css";

const Imagelist = ({ images }) => {
  const imagess = images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return <div className="image-list">{imagess}</div>;
};

export default Imagelist;
