import * as React from 'react';
import { ArtworkDetail } from '../types/data.types';

type ArtworkTextProps = {
  artworkDetail: ArtworkDetail;
};

export const ArtworkText: React.FunctionComponent<ArtworkTextProps> = ({
  artworkDetail,
}: ArtworkTextProps) => (
  <div
    className="fl w-100 w-40-l tl f4 lh-copy pv3 ph3"
    style={{ maxWidth: 'fit-content' }}
  >
    <div>
      <h3>{artworkDetail?.title}</h3>
      <div className="fw6 f4">{artworkDetail?.artist_names}</div>
      <div className="fw5 f4">{artworkDetail?.date}</div>
    </div>

    <p>
      {artworkDetail?.category
        ? `${artworkDetail?.category}. ${artworkDetail?.medium}`
        : artworkDetail?.medium}
    </p>

    <p>{artworkDetail?.dimensions.in}</p>

    {artworkDetail?.collecting_institution && (
      <p>Collector: {artworkDetail?.collecting_institution}</p>
    )}

    <p>{artworkDetail?.description}</p>
  </div>
);
