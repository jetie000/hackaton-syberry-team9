export interface IReviewResp {
  total: number;
  totalPages: number;
  totalPositiveReviews: number;
  totalNegativeReviews: number;
  totalNeutralReviews: number;
  items: [
    {
      kinopoiskId: number;
      type: string;
      date: string;
      positiveRating: number;
      negativeRating: number;
      author: string;
      title: string;
      description: string;
    },
  ];
}
