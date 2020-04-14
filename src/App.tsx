import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetTrendingArtistsData } from './types/data.types';
import { ArtworkDetail } from './components/ArtworkDetail.component';
import { Dashboard } from './components/Dashboard.component';
import { AppHeader } from './components/AppHeader.component';

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

const App = () => {
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
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/artwork/:artworkId">
          <ArtworkDetail />
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
