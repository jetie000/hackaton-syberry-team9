export interface IMovieShort {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  countries: { country: string }[];
  genres: { genre: string }[];
  ratingKinopoisk: number;
  ratingImbd: number;
  year: string;
  type: string;
  posterUrl: string;
  posterUrlPreview: string;
}
