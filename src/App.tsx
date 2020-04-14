import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ArtworkDetail } from './components/ArtworkDetail.component';
import { Dashboard } from './components/Dashboard.component';
import { AppHeader } from './components/AppHeader.component';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/artwork/:artworkId">
          <ArtworkDetail />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
