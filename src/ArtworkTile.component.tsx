import * as React from 'react';
import type { ArtworkTileType } from './types/data.types';

type ArtworkTileProps = {
  key: string;
  artworkTile: ArtworkTileType;
};

export const ArtworkTile: React.StatelessComponent<ArtworkTileProps> = ({
  artworkTile,
}: ArtworkTileProps) => (
  <div className="ba pa4 ma4 flex flex-column bg-near-white">
    <img src={artworkTile.imageUrl} alt="imageAltTag" />
    <span className="pt2">{artworkTile.title}</span>
  </div>
);
