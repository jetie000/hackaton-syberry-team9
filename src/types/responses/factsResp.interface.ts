export interface IFactsResp {
	total: number;
	items: {
		text: string;
		type: string;
		spoiler: boolean;
	}[];
}
