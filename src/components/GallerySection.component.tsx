import * as React from 'react';
import type { ArtworkTileType, ArtworkTilesType } from '../types/data.types';
import { ArtistSubheader } from './ArtistSubheader.component';
import { ArtworkTile } from './ArtworkTile.component';

type GallerySectionProps = {
  name: string;
  birthday: string;
  deathday: string;
  artworks: ArtworkTilesType;
};

export const GallerySection: React.FunctionComponent<GallerySectionProps> = ({
  name,
  birthday,
  deathday,
  artworks,
}: GallerySectionProps) => (
  <>
    <ArtistSubheader name={name} birthday={birthday} deathday={deathday} />
    <div className="flex justify-around flex-wrap">
      {artworks.map((artwork: ArtworkTileType) => (
        <ArtworkTile key={artwork.id} artworkTile={artwork} />
      ))}
    </div>
  </>
);
