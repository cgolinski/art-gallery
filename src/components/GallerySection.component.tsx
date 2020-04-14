import * as React from 'react';
import type { ArtworkTileType } from '../types/data.types';
import { ArtistSubheader } from './ArtistSubheader.component';
import { ArtworkTile } from './ArtworkTile.component';

export const GallerySection = ({ name, birthday, deathday, artworks }) => (
  <>
    <ArtistSubheader name={name} birthday={birthday} deathday={deathday} />
    <div className="flex justify-around flex-wrap">
      {artworks.map((artwork: ArtworkTileType) => (
        <ArtworkTile key={artwork.id} artworkTile={artwork} />
      ))}
    </div>
  </>
);
