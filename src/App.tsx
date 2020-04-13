import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetTrendingArtistsData } from './types/data.types';
import { ArtworkDetailComponent } from './ArtworkDetail.component';
import { Dashboard } from './Dashboard.component';
import { Header } from './Header.component';

const GET_TRENDING_ARTISTS = gql`
  {
    trending_artists(name: ARTIST_FOLLOW) {
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
      <Header />
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
