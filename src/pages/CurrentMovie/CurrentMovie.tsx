import { useGetByIdQuery, useGetStaffQuery } from "../../service/store/api/movieApi";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { bold, filmCharachs, imgStyles, infoText, infoWrapper, watchButton, wrapper } from "./styles";

const CurrentMovie = () => {
	const { movieid } = useParams();
	const navigate = useNavigate();
	console.log(movieid);
	const { isLoading, isSuccess, data, isError, error } = useGetByIdQuery(+(movieid || -1));
	const staff = useGetStaffQuery(+(movieid || -1));

	const [director, setDirector] = useState<undefined | string>();

	useEffect(() => {
		console.log(error);
		if (isError) {
			navigate("/not-found");
		}
	}, [isError]);

	useEffect(() => {
		if (staff.data && typeof staff.data !== "string") {
			setDirector(staff.data.find((a) => a.professionKey === "DIRECTOR")?.nameRu);
		}
	}, [staff]);

	const handleWatch = useCallback((url: string) => {
		navigate(url);
	}, []);

	return isLoading ? (
		<CircularProgress />
	) : (
		<Box component="main" sx={wrapper}>
			{isSuccess && typeof data !== "string" && (
				<>
					<Typography variant="h4" component="h4">
						{data.logoUrl}
					</Typography>
					<Box sx={infoWrapper}>
						<Box>
							<img
								style={imgStyles}
								alt={data.nameOriginal}
								src={data.posterUrl || "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
							/>
						</Box>
						<Box sx={infoText}>
							<Typography component="h5" variant="h5">
								{data.nameRu} ( {data.year} )
							</Typography>
							<Typography component="span" variant="body1">
								{data.nameEn}
							</Typography>
							<Button sx={watchButton} variant="contained" onClick={() => handleWatch(data.webUrl)}>
								Watch
							</Button>
							<Box sx={filmCharachs}>
								<Typography sx={bold} component="p">
									Country:
								</Typography>
								<Typography component="p">{data.countries[0].country}</Typography>
								<Typography sx={bold} component="p">
									Genre:
								</Typography>
								<Typography component="p">{data.genres[0].genre}</Typography>
								<Typography sx={bold} component="p">
									Duration:
								</Typography>
								<Typography component="p">{data.filmLength}</Typography>
								<Typography sx={bold} component="p">
									IMDB rating:
								</Typography>
								<Typography component="p">{data.ratingImdb || "-"}</Typography>
								{director && (
									<>
										<Typography sx={bold} component="p">
											Director:
										</Typography>
										<Typography component="p">{director}</Typography>
									</>
								)}
							</Box>

							<Typography sx={bold} component="p">
								Description:
							</Typography>
							<Typography>{data.description}</Typography>
						</Box>
					</Box>
				</>
			)}
		</Box>
	);
};

export default CurrentMovie;
