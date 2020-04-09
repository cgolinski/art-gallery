import * as React from "react";

export const Artwork = ({ artwork }) => (
  <li>
    {artwork.title}
    <img src={artwork.imageUrl} alt="imageAltTag" />
  </li>
);
