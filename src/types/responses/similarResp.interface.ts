export interface ISimilarResp {
  total: number;
  items: {
    filmId: number;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    posterUrl: string;
    posterUrlPreview: string;
    relationType: string;
  }[];
}
