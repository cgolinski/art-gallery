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
      images {
        url(version: "large")
      }
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
    <div className="bg-moon-gray relative top-0 bottom-0 h-100">
      {/* <div className="bg-moon-gray vh-100 h-100"> */}
      {console.log({ artworkDetail })}
      <HomeButton />

      <div className="flex justify-center ph1 pv4">
        <img
          src={artworkDetail?.images[0].url}
          alt={`artwork: ${artworkDetail?.image_title}.`}
          className="pa4 bg-white ba"
        />
      </div>

      <div className="f4 lh-copy pa3 avenir w-75-ns ml-auto-ns mr-auto-ns">
        <p className="fw6 f3">{artworkDetail?.image_title}</p>
        <p>
          {artworkDetail?.category}
          {artworkDetail?.category && `.`} {artworkDetail?.medium}
        </p>
        <p>{artworkDetail?.dimensions.in}</p>
        <p>
          {artworkDetail?.collecting_institution &&
            `collector: ${artworkDetail?.collecting_institution}`}
        </p>
        <p className="tj">{artworkDetail?.description}</p>
      </div>
    </div>
  );
};
