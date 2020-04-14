import * as React from 'react';

export type SearchProps = {
  setSearchValue: (key: string) => void;
  searchValue: string;
};

export const Search: React.FunctionComponent<SearchProps> = ({
  setSearchValue,
  searchValue,
}: SearchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="db pr2" htmlFor="search-input">
        Search by artist
      </label>
      <input
        className="f4 ba br2 pa2 mv2"
        type="search"
        id="search-input"
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
};
