import * as React from 'react';

type ArtistSubheaderProps = {
  name: string;
  birthday: string;
  deathday: string;
};

export const ArtistSubheader: React.FunctionComponent<ArtistSubheaderProps> = ({
  name,
  birthday,
  deathday,
}: ArtistSubheaderProps) => (
  <>
    <h2 className="db b mb0 pt6 f1 tl mv0 mh5 tracked-tight">{name}</h2>
    <div className="tl mb0 mt2 mh5 f4">
      {deathday ? `${birthday}–${deathday}` : birthday}
    </div>
  </>
);
