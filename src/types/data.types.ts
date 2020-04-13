// These are data types returned from the GraphQL API. Is there a better place to store them?

export type Artist = {
  id: string;
  name: string;
  years: string;
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
  imageUrl: string;
  images: {
    url: string;
  };
  image_title: string;
  displayLabel: string;
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
  title: string;
  imageUrl: string;
  images: { url: string };
};

export type ArtworkTilesType = ArtworkTileType[];
