import * as React from 'react';
import type { ArtworkType } from './types/data.types';

export interface ArtworkProps {
  key: string;
  artwork: ArtworkType;
}

export const Artwork: React.StatelessComponent<ArtworkProps> = ({
  artwork,
}: ArtworkProps) => (
  <div className="ba pa4 ma4 flex flex-column bg-near-white">
    <img src={artwork.imageUrl} alt="imageAltTag" />
    <span className="pt2">{artwork.title}</span>
  </div>
);

// Search for artist by name, case insensitive
// Search for artwork by name, case insensitive, same input field as other search
// Filter the artwork to show only their artwork
