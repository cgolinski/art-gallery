import * as React from 'react';
import { useParams } from 'react-router-dom';
import { HomeButton } from './HomeButton.component';
import { gql } from 'apollo-boost';
import { GetArtworkDetailData } from './types/data.types';
import { Loading } from './Loading.component';
import { Error } from './Error.component';
import { useQuery } from '@apollo/react-hooks';

const GET_ARTWORK_DETAIL = gql`
  query getArtworkDetail($id: String!) {
    artwork(id: $id) {
      id
      artist_names
      category
      collecting_institution
      date
      description
      dimensions {
        in
      }
      imageUrl
      image_title
      displayLabel
      medium
      title
    }
  }
`;

export const ArtworkDetailComponent = () => {
  const { artworkId } = useParams();

  const { loading, error, data } = useQuery<GetArtworkDetailData>(
    GET_ARTWORK_DETAIL,
    {
      variables: { id: artworkId },
    }
  );

  const artworkDetail = data?.artwork;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error?.message} />;
  }

  return (
    <div>
      <HomeButton />
      <div>Artwork page. artworkId: {artworkId}</div>
      artworkDetail: {console.log({ artworkDetail })}
    </div>
  );
};
