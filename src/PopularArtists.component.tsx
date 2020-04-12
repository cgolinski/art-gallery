import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import * as React from 'react';
import { Artwork } from './Artwork.component';
import type {
  Artist,
  ArtworkType,
  GetPopularArtistsData,
} from './types/data.types';

type PopularArtistsProps = {
  setInitialArtists: any;
  displayedArtists: Artist[];
};
const GET_POPULAR_ARTISTS = gql`
  {
    popular_artists {
      artists {
        id
        name
        bio
        artworks {
          id
          title
          imageUrl
        }
      }
    }
  }
`;

export const PopularArtists: React.StatelessComponent<PopularArtistsProps> = ({
  setInitialArtists,
  displayedArtists,
}) => {
  const { loading, error, data } = useQuery<GetPopularArtistsData>(
    GET_POPULAR_ARTISTS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data && displayedArtists.length === 0) {
    setInitialArtists(data?.popular_artists.artists);
  }
  return (
    <div>
      <h2>Popular Artists</h2>
      {displayedArtists.map(({ id, name, bio, artworks }: Artist) => (
        <div key={id}>
          <div className="flex flex-column">
            <h3 className="b mb0">{name}</h3>
            <span>{bio}</span>
          </div>
          <div className="flex justify-around flex-wrap">
            {artworks.map((artwork: ArtworkType) => (
              <Artwork key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
