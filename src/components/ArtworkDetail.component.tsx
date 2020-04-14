import * as React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetArtworkDetailData } from '../types/data.types';
import { Loading } from './Loading.component';
import { Error } from './Error.component';
import './ArtworkTile.component.css';
import { ArtworkText } from './ArtworkText.component';

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
      images {
        url(version: "large")
      }
      displayLabel
      medium
      title
    }
  }
`;

export const ArtworkDetail = () => {
  const { artworkId } = useParams();

  const { loading, error, data } = useQuery<GetArtworkDetailData>(
    GET_ARTWORK_DETAIL,
    { variables: { id: artworkId } }
  );

  const artworkDetail = data?.artwork;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={error?.message} />;
  }

  return (
    <div className="pa4">
      <div className="fl w-100 w-60-l tc">
        <div className="mw-100 picture-frame">
          <img
            src={artworkDetail?.images[0].url}
            alt={`artwork: ${artworkDetail?.title}.`}
            className="dib"
          />
        </div>
      </div>
      <ArtworkText artworkDetail={artworkDetail} />
    </div>
  );
};
