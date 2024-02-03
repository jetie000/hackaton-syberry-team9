import { Path } from "../../service/router/RouteLines";
import { useGetByIdQuery } from "../../service/store/api/movieApi";
import { IMovieLong } from "@/types/movieLong.interface";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { historyMovieWrap, historyMovie__title } from "./styles";

interface IHistoryMovie {
	movieId: number;
}

function HistoryMovie({ movieId }: IHistoryMovie) {
	const navigate = useNavigate();
	const { isLoading, isSuccess, data } = useGetByIdQuery(movieId || 0);

	const handleNaviagteCurrentMovie = () => {
		return navigate(Path.CurrentMovie + "/" + (data as IMovieLong).kinopoiskId);
	};

	return isLoading ? (
		<CircularProgress />
	) : (
		<>
			{isSuccess && typeof data != "string" && (
				<Box onClick={handleNaviagteCurrentMovie} sx={historyMovieWrap}>
					<Typography variant="h6" component="h6" sx={historyMovie__title}>
						{data.nameOriginal}
					</Typography>
					<Typography variant="h6" component="h6" sx={historyMovie__title}>
						Year: {data.year}
					</Typography>
					<img src={data.posterUrlPreview} alt="movie" />
				</Box>
			)}
		</>
	);
}

export default HistoryMovie;
