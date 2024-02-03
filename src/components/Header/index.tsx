import React, { BaseSyntheticEvent, useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { buttonCommon, iconStyle, wrapper } from "./styles";
import LoginPopup from "../LoginPopup/loginPopup.component";
import { RootState } from "@/service/store/store";
import { useSelector } from "react-redux";
import { Path } from "../../service/router/RouteLines";
import { useNavigate } from "react-router";

const Header = () => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
    const navigate = useNavigate()

	const [search, setSearch] = useState("");
	const { user } = useSelector((state: RootState) => state.user);
	const searchInput = (e: BaseSyntheticEvent) => {
		setSearch(e.target.value);
	};

	const searchClickHandler = () => {
		console.log("hh");
	};

	return (
		<Box sx={wrapper} component="header">
			<Box onClick={() => navigate('/')} sx={{cursor: 'pointer'}}>
				<Logo style={iconStyle} />
				<Typography m="auto 0">Cinema Bird</Typography>
			</Box>
			<Box ml="auto">
				<Box></Box>
				<Box>
					<TextField size="small" placeholder="search" onInput={searchInput} />
					<Button variant="contained" sx={buttonCommon} onClick={searchClickHandler}>
						Find Me
					</Button>
				</Box>
				{user ? (
					<Avatar sx={{cursor: 'pointer'}} alt={user.username} src="ava.png" onClick={() => navigate(Path.PersonalArea)}/>
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
