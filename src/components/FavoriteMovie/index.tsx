import { useGetByIdQuery } from "../../service/store/api/movieApi";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { favoriteMovieWrap, favoriteMovie__title } from "./styles";
import { useNavigate } from "react-router-dom";
import { Path } from "../../service/router/RouteLines";
import { IMovieLong } from "@/types/movieLong.interface";
import { useDispatch } from "react-redux";
import { actions } from "../../service/store/slices/favorites.slice";

interface IFavoriteMovie {
	movieId: number;
}

function FavoriteMovie({ movieId }: IFavoriteMovie) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, isSuccess, data } = useGetByIdQuery(movieId || 0);

	const handleNaviagteCurrentMovie = () => {
		return navigate(Path.CurrentMovie + "/" + (data as IMovieLong).kinopoiskId);
	};

	const handleDeleteFavoriteMovie = () => {
		return dispatch(actions.removeFavorite((data as IMovieLong).kinopoiskId));
	};

	return isLoading ? (
		<CircularProgress />
	) : (
		<>
			{isSuccess && typeof data != "string" && (
				<Box onClick={handleNaviagteCurrentMovie} sx={favoriteMovieWrap}>
					<Typography variant="h6" component="h6" sx={favoriteMovie__title}>
						{data.nameOriginal}
					</Typography>
					<Typography variant="h6" component="h6" sx={favoriteMovie__title}>
						Year: {data.year}
					</Typography>
					<Button variant="outlined" onClick={handleDeleteFavoriteMovie}>
						Delete
					</Button>
					<img src={data.posterUrlPreview} alt="movie" />
				</Box>
			)}
		</>
	);
}

export default FavoriteMovie;
