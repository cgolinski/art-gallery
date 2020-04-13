import * as React from 'react';
import { PopularArtists } from './PopularArtists.component';
import { Search } from './Search.component';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetPopularArtistsData } from './types/data.types';

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

const App = () => {
  const { loading, error, data } = useQuery<GetPopularArtistsData>(
    GET_POPULAR_ARTISTS
  );

  const [searchValue, setSearchValue] = React.useState('');

  const popularArtistsData: GetPopularArtistsData = data || {
    popular_artists: { artists: [] },
  };

  const displayedArtists = popularArtistsData.popular_artists.artists.filter(
    ({ name }) => name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-end">
        <Search setSearchValue={setSearchValue} searchValue={searchValue} />
      </div>
      <PopularArtists
        loading={loading}
        error={error}
        displayedArtists={displayedArtists}
      />
    </div>
  );
};

export default App;
