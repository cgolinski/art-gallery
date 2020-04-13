import * as React from 'react';
import type { ArtworkTileType } from './types/data.types';
import { NavLink } from 'react-router-dom';

type ArtworkTileProps = {
  key: string;
  artworkTile: ArtworkTileType;
};

export const ArtworkTile: React.StatelessComponent<ArtworkTileProps> = ({
  artworkTile,
}: ArtworkTileProps) => {
  return (
    <NavLink to={`/artwork/${artworkTile.id}`}>
      <div
        className="ba pa4 ma4 tc bg-near-white hover-bg-lightest-blue pointer grow"
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
          transition: 'all 0.12s ease-in',
        }}
      >
        <img src={artworkTile.imageUrl} alt="artwork" />
      </div>
    </NavLink>
  );
};
