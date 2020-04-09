import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import * as React from "react";
import { Artwork } from "./Artwork";
import type {
  Artist,
  ArtworkType,
  GetPopularArtistsData,
} from "./types/data.types";

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

export const PopularArtists: React.StatelessComponent = () => {
  const { loading, error, data } = useQuery<GetPopularArtistsData>(
    GET_POPULAR_ARTISTS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h3>Popular Artists</h3>
      {data?.popular_artists.artists.map(
        ({ id, name, bio, artworks }: Artist) => (
          <div key={id}>
            <p>artist: {name}</p>
            <p>bio: {bio}</p>
            <ul>
              {name}'s artwork:
              {artworks.map((artwork: ArtworkType) => (
                <Artwork key={artwork.id} artwork={artwork} />
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};
