import React, { useEffect, useState } from "react";
import axios from "axios";

const Pic = props => {
  const [photo, setPhoto] = useState();
  const loc = props.loc;
  const accessKey =
    "d5aeca2e0d9de8c9724b8ccffa6e1c7f0b9eefd73acc42ce1d64be3b421f8ad9";

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${loc}&client_id=${accessKey}`
      )
      .then(res => {
        setPhoto(res.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      {photo && <img alt="pic desc" src={photo[0].urls.regular} />}

      {/* photo &&
        photo.map(img => (
          <span key={img.id}>
            <img alt={img.alt_description} src={img.urls.regular} />
          </span>
        )) */}
    </div>
  );
};

export default Pic;
