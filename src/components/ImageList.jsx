import React from "react";

const ImageList = (props) => {
  const pictureList = props.pictures.map((picture) => {
    return (
      <img
        className="card"
        src={picture.urls.regular}
        alt={picture.alt_description}
      />
    );
  });

  return <div className="card-columns">{pictureList}</div>;
};

export default ImageList;
