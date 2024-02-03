import { ISearchResp } from "@/types/responses/searchResp.interface";
import { baseApi } from "./baseApi";
import { ITopResp } from "@/types/responses/topResp.interface";
import { IMovieLong } from "@/types/movieLong.interface";
import { IPremiereResp } from "@/types/responses/premiereResp.interface";
import { ISimilarResp } from "@/types/responses/similarResp.interface";
import { IImagesResp } from "@/types/responses/imagesResp.interface";
import { IFactsResp } from "@/types/responses/factsResp.interface";
import { IReviewResp } from "@/types/responses/reviewResp.interface";
import { IAwardsResp } from "@/types/responses/awardsResp.interface";
import { IStaffResp } from "@/types/responses/staffResp.interface";

export const movieApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		SearchByKeyword: builder.query<ISearchResp | string, { keyword: string; page: number }>({
			query: ({ keyword, page }) => ({
				url: "/v2.1/films/search-by-keyword?keyword=" + keyword + "&page=" + page,
				method: "GET",
			}),
		}),
		GetTop: builder.query<ITopResp | string, { page: number; type: string }>({
			query: ({ page, type }) => ({
				url: "/v2.2/films/collections?page=" + page + "&type=" + type,
				method: "GET",
			}),
		}),
		GetById: builder.query<IMovieLong | string, number>({
			query: (id) => ({
				url: "/v2.2/films/" + id,
				method: "GET",
			}),
		}),
		GetPremiereRandom: builder.query<IPremiereResp | string, { month: string; year: number }>({
			query: ({ month, year }) => ({
				url: "/v2.2/films/premieres?month=" + month + "&year=" + year,
				method: "GET",
			}),
		}),
		GetSimilars: builder.query<ISimilarResp | string, number>({
			query: (id) => ({
				url: "/v2.2/films/" + id + "/similars",
				method: "GET",
			}),
		}),
		GetImages: builder.query<IImagesResp | string, number>({
			query: (id) => ({
				url: "/v2.2/films/" + id + "/images",
				method: "GET",
			}),
		}),
		GetFacts: builder.query<IFactsResp | string, number>({
			query: (id) => ({
				url: "/v2.2/films/" + id + "/facts",
				method: "GET",
			}),
		}),
		GetReviews: builder.query<IReviewResp | string, { id: string; page: number; order: string }>({
			query: ({ id, page, order }) => ({
				url: "/v2.2/films/" + id + "/reviews?page" + page + "&order=" + order,
				method: "GET",
			}),
		}),
		GetAwards: builder.query<IAwardsResp | string, number>({
			query: (id) => ({
				url: "/v2.2/films/" + id + "/awards",
				method: "GET",
			}),
		}),
		GetStaff: builder.query<IStaffResp[] | string, number>({
			query: (filmId) => ({
				url: "/v1/staff?filmId=" + filmId,
				method: "GET",
			}),
		}),
	}),
});

// eslint-disable-next-line no-empty-pattern
export const {
	useSearchByKeywordQuery,
	useGetTopQuery,
	useGetByIdQuery,
	useGetAwardsQuery,
	useGetFactsQuery,
	useGetImagesQuery,
	useGetPremiereRandomQuery,
	useGetReviewsQuery,
	useGetSimilarsQuery,
} = movieApi;
