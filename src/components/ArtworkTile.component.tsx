import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './ArtworkTile.component.css';
import type { ArtworkTileType } from '../types/data.types';

type ArtworkTileProps = {
  artworkTile: ArtworkTileType;
};

export const ArtworkTile: React.FunctionComponent<ArtworkTileProps> = ({
  artworkTile,
}: ArtworkTileProps) => {
  return (
    <NavLink
      to={`/art-gallery/artwork/${artworkTile.id}`}
      className="artwork-link"
    >
      <div className="ma4 pointer picture-frame artwork-tile">
        <img src={artworkTile.images[0].url} alt="artwork" />
      </div>
    </NavLink>
  );
};
