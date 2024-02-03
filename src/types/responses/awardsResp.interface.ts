export interface IAwardsResp {
	total: number;
	items: [
		{
			name: string;
			win: true;
			imageUrl: string;
			nominationName: string;
			year: number;
			persons: [
				{
					kinopoiskId: number;
					webUrl: string;
					nameRu: string;
					nameEn: string;
					sex: string;
					posterUrl: string;
					growth: number;
					birthday: string;
					death: string;
					age: number;
					birthplace: string;
					deathplace: string;
					profession: string;
				},
			];
		},
	];
}
