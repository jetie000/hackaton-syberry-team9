import React, { BaseSyntheticEvent, useEffect, useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { buttonCommon, iconStyle, searchWrapper, wrapper } from "./styles";
import LoginPopup from "../LoginPopup/loginPopup.component";
import { RootState } from "../../service/store/store";
import { useSelector } from "react-redux";
import { Path } from "../../service/router/RouteLines";
import { useNavigate } from "react-router";
import { IMovieShort } from "../../types/movieShort.interface";
import { useSearchByKeywordQuery } from "../../service/store/api/movieApi";

const SearchList = ({ results }: { results: IMovieShort[] | undefined }) => {
	const navigate = useNavigate();
	return results ? (
		<Box sx={searchWrapper}>
			{results?.map((res, id) => (
				<Box onClick={() => navigate(`/currentmovie/${(res as any).filmId}`)} key={id}>
					{res.nameRu}
				</Box>
			))}
		</Box>
	) : null;
};

const Header = () => {
	const [open, setOpen] = React.useState(false);
	const [searchRes, setSearchRes] = useState<IMovieShort[] | undefined>();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();

	const [search, setSearch] = useState("");

	const { data, isSuccess, isLoading, error, isError } = useSearchByKeywordQuery({ keyword: search, page: 1 });

	const { user } = useSelector((state: RootState) => state.user);
	const searchInput = (e: BaseSyntheticEvent) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		if (isSuccess && typeof data !== "string") {
			setSearchRes(data.films.slice(0, 6));
		}
	}, [data]);

	return (
		<Box sx={wrapper} component="header">
			<Box onClick={() => navigate("/")} sx={{ cursor: "pointer" }}>
				<Logo style={iconStyle} />
				<Typography m="auto 0">Cinema Bird</Typography>
			</Box>
			<Box ml="auto">
				<Box></Box>
				<Box>
					<TextField size="small" placeholder="search" onInput={searchInput} />
					<SearchList results={searchRes} />
				</Box>
				{user ? (
					<Avatar
						sx={{ cursor: "pointer" }}
						alt={user.username}
						src="ava.png"
						onClick={() => navigate(Path.PersonalArea)}
					/>
				) : (
					<Button variant="outlined" size="small" onClick={handleOpen} sx={buttonCommon}>
						Log In
					</Button>
				)}
			</Box>
			<LoginPopup handleClose={handleClose} open={open} />
		</Box>
	);
};

export default Header;
