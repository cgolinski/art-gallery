import * as React from 'react';
import { useParams } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { GetArtworkDetailData } from './types/data.types';
import { Loading } from './Loading.component';
import { Error } from './Error.component';
import './ArtworkTile.component.css';

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
    <div className="">
      {console.log({ artworkDetail })}

      <article className="pa4">
        <div className="fl w-100 w-60-l tc">
          {/* Column One */}
          <div className="mw-100 picture-frame">
            <img
              src={artworkDetail?.images[0].url}
              alt={`artwork: ${artworkDetail?.title}.`}
              className="dib"
            />
          </div>
        </div>
        <div className="fl w-100 w-40-l tl">
          {/* Column Two*/}
          <div
            className="f4 lh-copy pv3 ph3"
            style={{ maxWidth: 'fit-content' }}
          >
            <div>
              <h3 className="">{artworkDetail?.title}</h3>
              <div className="fw6 f4">{artworkDetail?.artist_names}</div>
              <div className="fw5 f4">{artworkDetail?.date}</div>
            </div>
            <p>
              {artworkDetail?.category}
              {artworkDetail?.category && `.`} {artworkDetail?.medium}
            </p>
            <p>{artworkDetail?.dimensions.in}</p>
            {artworkDetail?.collecting_institution && (
              <p>Collector: {artworkDetail?.collecting_institution}</p>
            )}
            <p className="">{artworkDetail?.description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};
