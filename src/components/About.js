import React from "react";

const placeholderImage = "https://via.placeholder.com/215";

export default function About({ image = placeholderImage, about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}
