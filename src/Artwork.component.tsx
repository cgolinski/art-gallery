import * as React from 'react';
import type { ArtworkType } from './types/data.types';

type ArtworkProps = {
  key: string;
  artwork: ArtworkType;
};

export const Artwork: React.StatelessComponent<ArtworkProps> = ({
  artwork,
}: ArtworkProps) => (
  <div className="ba pa4 ma4 flex flex-column bg-near-white">
    <img src={artwork.imageUrl} alt="imageAltTag" />
    <span className="pt2">{artwork.title}</span>
  </div>
);