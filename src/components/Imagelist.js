import React from "react";

import Image from "./Image";
import "./Imagelist.css";

const Imagelist = ({ images }) => {
  const imagess = images.map((image) => {
    return <Image key={image.id} image={image} />;
  });

  return <div className="image-list">{imagess}</div>;
};

export default Imagelist;
