import { IMovieShort } from "../movieShort.interface";

export interface ISearchResp {
  keyword: string;
  pagesCount: number;
  searchFilmsCountResult: number;
  films: IMovieShort[];
}
