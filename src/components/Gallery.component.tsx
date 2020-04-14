import * as React from 'react';
import { ApolloError } from 'apollo-boost';
import type { Artist } from '../types/data.types';
import { Error } from './Error.component';
import { Loading } from './Loading.component';
import { GallerySection } from './GallerySection.component';

type GalleryProps = {
  displayedArtists: Artist[];
  loading: boolean;
  error?: ApolloError;
};

export const Gallery: React.FunctionComponent<GalleryProps> = ({
  displayedArtists,
  loading,
  error,
}: GalleryProps) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error?.message} />;
  }
  return (
    <div>
      {!displayedArtists.length && 'No results found'}
      {displayedArtists.map(
        ({ id, name, birthday, deathday, artworks }: Artist) => (
          <GallerySection
            key={id}
            name={name}
            birthday={birthday}
            deathday={deathday}
            artworks={artworks}
          />
        )
      )}
    </div>
  );
};
