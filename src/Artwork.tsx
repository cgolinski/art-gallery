import * as React from "react";
import type { ArtworkType } from "./types/data.types";

export interface ArtworkProps {
  key: string;
  artwork: ArtworkType;
}

export const Artwork: React.StatelessComponent<ArtworkProps> = ({
  artwork,
}: ArtworkProps) => (
  <li>
    {artwork.title}
    <img src={artwork.imageUrl} alt="imageAltTag" />
  </li>
);
