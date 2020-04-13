import * as React from 'react';
import { useParams } from 'react-router-dom';
import { HomeButton } from './HomeButton.component';

export const ArtworkDetailComponent = () => {
  const { artworkId } = useParams();
  return (
    <div>
      <HomeButton />
      <div>Artwork page. artworkId: {artworkId}</div>
    </div>
  );
};
