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
      <label className="db pr2" htmlFor="search-input">
        Search by artist
      </label>
      <input
        className="f4 ba br2 pa2 mv2"
        type="text"
        id="search-input"
        value={searchValue}
        onChange={handleChange}
      />
      <div>
        <input
          type="reset"
          className="br4 bg-white ph3 pv2"
          value="Clear search"
          onClick={clearSearch}
          disabled={!searchValue}
        />
      </div>
    </form>
  );
};
