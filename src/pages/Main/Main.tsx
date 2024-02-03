import { useCallback, useEffect } from "react";
import { useGetTopQuery } from "../../service/store/api/movieApi";
import { Box, CircularProgress, Divider, Typography } from "@mui/material";
import { hrStyles, imgStyle, mainMovieWrapper } from "./styles";
import Slider from "../../components/Slider";
import { useNavigate } from "react-router-dom";

function Main() {
	const navigate = useNavigate();
	const { isLoading, isSuccess, isError, data } = useGetTopQuery({ page: 1, type: "CLOSES_RELEASES" });
	const topLat = useGetTopQuery({ page: 1, type: "TOP_POPULAR_ALL" });
	useEffect(() => {
		console.log(data);
	}, [data]);

	const onFilmClick = useCallback(() => {
		if (isSuccess && typeof data !== "string") navigate(`currentmovie/${data.items[0].kinopoiskId}`);
	}, [navigate]);
	return isLoading ? (
		<CircularProgress />
	) : (
		<Box component="main">
			<Typography component="h2" variant="h3">
				Watch movies with us!
			</Typography>
			{isSuccess && typeof data !== "string" && (
				<>
					<Box sx={mainMovieWrapper}>
						<Typography component="h4">Soon: {data.items[0].nameRu}</Typography>
						<img
							alt={data.items[0].nameOriginal}
							src={data.items[0].posterUrl}
							style={imgStyle}
							onClick={onFilmClick}
						/>
					</Box>
					<hr style={hrStyles} />
					{topLat.isSuccess && typeof topLat.data !== "string" && (
						<>
							<Slider cards={topLat.data} />
						</>
					)}
				</>
			)}
		</Box>
	);
}

export default Main;
