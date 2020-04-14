export type Artist = {
  id: string;
  name: string;
  birthday: string;
  deathday: string;
  artworks: ArtworkTilesType;
};

export type Artists = Artist[];

export type TrendingArtists = { artists: Artists };

export type ArtworkDetail = {
  id: string;
  artist_names: string;
  category: string;
  collecting_institution: string;
  date: string;
  description: string;
  dimensions: {
    in: string;
  };
  images: {
    url: string;
  };
  medium: string;
  title: string;
};

export type GetTrendingArtistsData = {
  trending_artists: TrendingArtists;
};
export type GetArtworkDetailData = {
  artwork: ArtworkDetail;
};

export type ArtworkTileType = {
  id: string;
  images: { url: string };
};

export type ArtworkTilesType = ArtworkTileType[];
