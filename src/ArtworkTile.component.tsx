import * as React from 'react';
import type { ArtworkTileType } from './types/data.types';
import { useHistory } from 'react-router-dom';

type ArtworkTileProps = {
  key: string;
  artworkTile: ArtworkTileType;
};

export const ArtworkTile: React.StatelessComponent<ArtworkTileProps> = ({
  artworkTile,
}: ArtworkTileProps) => {
  const history = useHistory();
  const url = `/artwork/${artworkTile.id}`;
  const handleClick = () => {
    history.push(url);
  };

  return (
    <div
      className="ba pa4 ma4 flex flex-column bg-near-white pointer"
      onClick={handleClick}
    >
      <img src={artworkTile.imageUrl} alt="imageAltTag" />
      <span className="pt2">{artworkTile.title}</span>
    </div>
  );
};
