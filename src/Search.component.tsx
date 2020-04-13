import * as React from 'react';

export type SearchProps = {
  setSearchValue: (key: string) => void;
  searchValue: string;
};

export const Search: React.StatelessComponent<SearchProps> = ({
  setSearchValue,
  searchValue,
}: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const clearSearch = () => setSearchValue('');

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="ba br2 pa2 f4 dib mr2 mt2 mb1"
        type="text"
        id="search-input"
        value={searchValue}
        onChange={handleChange}
      />
      <label className="f4 pb2 db" htmlFor="search-input">
        Search by artist
      </label>
      <input
        type="reset"
        className="br4 bg-white ph3 pv2"
        value="See all artists"
        onClick={clearSearch}
        disabled={!searchValue}
      />
    </form>
  );
};
