import * as React from 'react';
import { PopularArtists } from './PopularArtists.component';
import { Search } from './Search.component';

const App = () => {
  const [displayedArtists, setDisplayedArtists] = React.useState([]);
  const [initialArtists, setInitialArtists] = React.useState([]);

  return (
    <div>
      <div className="flex justify-end">
        <Search setDisplayedArtists={setDisplayedArtists} />
      </div>
      <PopularArtists
        setInitialArtists={setInitialArtists}
        displayedArtists={
          displayedArtists.length ? displayedArtists : initialArtists
        }
      />
    </div>
  );
};

export default App;
