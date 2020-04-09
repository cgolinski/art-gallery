import * as React from 'react';

export type SearchProps = {};
export type SearchState = { value: string };

export const Search = () => {
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('A search was submitted: ' + inputValue);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="f4 pb2 db" htmlFor="search-input">
        Search by artist or artwork
      </label>
      <div>
        <input
          className="ba br2 pa2 f4 dib mr2"
          type="search"
          id="search-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="f4 br4 b--none bg-light-blue ph4 pv2 dib"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};
