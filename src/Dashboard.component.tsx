import * as React from 'react';
import { Gallery } from './Gallery.component';
import { Search } from './Search.component';

export const Dashboard = ({
  setSearchValue,
  searchValue,
  loading,
  error,
  displayedArtists,
}: any) => (
  <div className="pa3">
    <h1 className="tc">Gallery of Popular Artists</h1>
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
