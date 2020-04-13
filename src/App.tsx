import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetPopularArtistsData } from './types/data.types';
import { ArtworkDetailComponent } from './ArtworkDetail.component';
import { Dashboard } from './Dashboard.component';

const GET_POPULAR_ARTISTS = gql`
  {
    popular_artists {
      artists {
        id
        name
        years
        artworks {
          id
          title
          imageUrl
          images {
            url(version: "square")
          }
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
    <Router>
      <Switch>
        <Route path="/artwork/:artworkId">
          <ArtworkDetailComponent />
        </Route>
        <Route path="/">
          <Dashboard
            setSearchValue={setSearchValue}
            searchValue={searchValue}
            loading={loading}
            error={error}
            displayedArtists={displayedArtists}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
