import { IMovieShort } from "../movieShort.interface";

export interface ITopResp {
	total: number;
	totalPages: number;
	items: IMovieShort[];
}
