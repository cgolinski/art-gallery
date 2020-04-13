import * as React from 'react';
import { PopularArtists } from './PopularArtists.component';
import { Search } from './Search.component';

export const Dashboard = ({
  setSearchValue,
  searchValue,
  loading,
  error,
  displayedArtists,
}: any) => (
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
