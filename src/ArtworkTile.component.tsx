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
      style={{
        border: 'solid 4vmin #222',
        borderBottomColor: '#444',
        borderLeftColor: '#333',
        borderRadius: '2px',
        borderRightColor: '#333',
        borderTopColor: '#222',
        boxShadow:
          '0 0 5px 0 rgba(0,0,0,.25) inset, 0 5px 10px 5px rgba(0,0,0,.25)',
        boxSizing: 'border-box',
      }}
    >
      <img src={artworkTile.imageUrl} alt="artwork" />
      {/* <img src={artworkTile.images[0].url} alt="artwork-square" /> */}
      <span className="pt2">{artworkTile.title}</span>
    </div>
  );
};
