import * as React from 'react';
import { ArtworkTile } from './ArtworkTile.component';
import type { Artist, ArtworkTileType } from './types/data.types';
import { ApolloError } from 'apollo-boost';
import { Loading } from './Loading.component';
import { Error } from './Error.component';

type GalleryProps = {
  displayedArtists: Artist[];
  loading: boolean;
  error?: ApolloError;
};

export const Gallery: React.StatelessComponent<GalleryProps> = ({
  displayedArtists,
  loading,
  error,
}) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error?.message} />;
  }
  return (
    <div>
      {!displayedArtists.length && 'No results found'}
      {displayedArtists.map(({ id, name, years, artworks }: Artist) => (
        <div key={id}>
          <h2 className="db b mb0 pt6 tc">{name}</h2>
          <div className="tc f-copy">{years}</div>
          <div className="flex justify-around flex-wrap">
            {artworks.map((artwork: ArtworkTileType) => (
              <ArtworkTile key={artwork.id} artworkTile={artwork} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
