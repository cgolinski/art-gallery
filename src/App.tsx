import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ArtworkDetail } from './components/ArtworkDetail.component';
import { Dashboard } from './components/Dashboard.component';
import { AppHeader } from './components/AppHeader.component';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Redirect exact from="/" to="/art-gallery" />
        <Route path="/art-gallery/artwork/:artworkId">
          <ArtworkDetail />
        </Route>
        <Route path="/art-gallery">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
