import * as React from 'react';
import { PopularArtists } from './PopularArtists.component';
import { Search } from './Search.component';

const App: React.StatelessComponent = () => (
  <div>
    <div className="flex justify-end">
      <Search />
    </div>
    <PopularArtists />
  </div>
);

export default App;
