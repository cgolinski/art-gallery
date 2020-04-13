// These are data types returned from the GraphQL API. Is there a better place to store them?

export type Artist = {
  id: string;
  name: string;
  bio: string;
  artworks: ArtworkTilesType;
};

export type Artists = Artist[];

export type PopularArtists = { artists: Artists };

export type GetPopularArtistsData = {
  popular_artists: PopularArtists;
};

export type ArtworkTileType = {
  id: string;
  title: string;
  imageUrl: string;
};

export type ArtworkTilesType = ArtworkTileType[];
