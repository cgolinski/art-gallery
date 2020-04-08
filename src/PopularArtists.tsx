import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React from "react";

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
        }
      }
    }
  }
`;

export const PopularArtists = () => {
  const { loading, error, data } = useQuery(POPULAR_ARTISTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.popular_artists.artists.map((artist) => (
    <div key={artist.id}>
      <p>artist: {artist.name}</p>
      <p>bio: {artist.bio}</p>
      <ul>
        list of artwork:
        {artist.artworks.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </div>
  ));
};
