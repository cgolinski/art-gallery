import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import * as React from "react";
import { Artwork } from "./Artwork";

const POPULAR_ARTISTS = gql`
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

export const PopularArtists = () => {
  const { loading, error, data } = useQuery(POPULAR_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.popular_artists.artists.map(({ id, name, bio, artworks }) => (
    <div key={id}>
      <p>artist: {name}</p>
      <p>bio: {bio}</p>
      <ul>
        {name}'s artwork:
        {artworks.map((artwork) => (
          <Artwork key={artwork.id} artwork={artwork} />
        ))}
      </ul>
    </div>
  ));
};
