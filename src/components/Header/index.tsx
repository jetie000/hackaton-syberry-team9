import React, { BaseSyntheticEvent, useState } from "react";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { buttonCommon, iconStyle, wrapper } from "./styles";
import LoginPopup from "../LoginPopup/loginPopup.component";

const Header = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        
    const [search, setSearch] = useState("");
    const loggedIn = true;
    const user = {name: 'Vasya', img: 'lalal'}
    const searchInput = (e: BaseSyntheticEvent) => {
        setSearch(e.target.value)
    }

    const searchClickHandler = () => {
        console.log('hh');
        
    }
  return <Box sx={wrapper} component="header">
    <Box>
        <Logo style={iconStyle} />
        <Typography m="auto 0">КиноСкрыт</Typography>
    </Box>
    <Box ml="auto">
        <Box></Box>
        <Box>
            <TextField size="small" placeholder="search" onInput={searchInput}/>
            <Button variant="contained" sx={buttonCommon} onClick={
                searchClickHandler
            }>Find Me</Button>
        </Box>
        {loggedIn?<Avatar alt={user.name} src={user.img}/>:<Button variant="outlined" size="small" onClick={handleOpen} sx={buttonCommon}>Log In</Button>}
    </Box>
    <LoginPopup handleClose={handleClose} open={open}/>
  </Box>;
};

export default Header;
