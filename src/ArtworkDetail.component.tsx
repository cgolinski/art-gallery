import * as React from 'react';
import { useParams } from 'react-router-dom';

export const ArtworkDetailComponent = () => {
  let { artworkId } = useParams();
  return <div>Artwork page. artworkId: {artworkId}</div>;
};
