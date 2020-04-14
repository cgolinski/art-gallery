import * as React from 'react';
import { Gallery } from './Gallery.component';
import { Search } from './Search.component';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetTrendingArtistsData } from '../types/data.types';

const GET_TRENDING_ARTISTS = gql`
  {
    trending_artists(name: ARTIST_FOLLOW) {
      artists {
        id
        name
        birthday
        deathday
        artworks {
          id
          images {
            url(version: "square")
          }
        }
      }
    }
  }
`;

export const Dashboard = () => {
  const { loading, error, data } = useQuery<GetTrendingArtistsData>(
    GET_TRENDING_ARTISTS
  );

  const [searchValue, setSearchValue] = React.useState('');

  const trendingArtistsData: GetTrendingArtistsData = data || {
    trending_artists: { artists: [] },
  };

  const displayedArtists = trendingArtistsData.trending_artists.artists.filter(
    ({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="pa3">
      <div className="tc pt4">
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      </div>
      <Gallery
        loading={loading}
        error={error}
        displayedArtists={displayedArtists}
      />
    </div>
  );
};
