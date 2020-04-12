import * as React from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';
import { GetPopularArtistsData } from './types/data.types';

export type SearchProps = { setDisplayedArtists: any };
export type SearchState = { inputValue: string };

const GET_POPULAR_ARTISTS = gql`
  {
    popular_artists {
      artists {
        id
        name
        bio
        artworks {
          id
          title
          imageUrl
        }
      }
    }
  }
`;

export const Search = ({ setDisplayedArtists }: SearchProps) => {
  const [inputValue, setInputValue] = React.useState('');

  const [getData, { loading, error, data }] = useLazyQuery<
    GetPopularArtistsData
  >(GET_POPULAR_ARTISTS);

  const nameIncludesSearchTerm = (searchTerm: string) => (
    name: string
  ): boolean => name.includes(searchTerm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('A search was submitted: ' + inputValue);

    getData();

    if (loading) {
      console.log('loading');
    }
    if (error) {
      console.log('error');
    }
    if (data) {
      console.log({ data });

      const filteredData = data.popular_artists.artists.filter(({ name }) =>
        nameIncludesSearchTerm(inputValue.toLowerCase())(name.toLowerCase())
      );

      setDisplayedArtists(filteredData);
      console.log({ filteredData });
    }
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
