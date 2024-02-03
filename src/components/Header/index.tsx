import React from "react";

import {ReactComponent as Logo} from "../../assets/logo.svg"

import styles from "./styles.module.scss";
import { Box, Button, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { wrapper } from "./styles";

const Header = () => {
    const loggedIn = false;
  return <Box sx={wrapper} component="header">
    <Box>
        <Logo className={styles.icon}/>
        <Typography m="auto 0">КиноСкрыт</Typography>
    </Box>
    <Box className={styles.searchBar}>
        <Box></Box>
        <Box>
            <TextField size="small" placeholder="search"/>
            <Button variant="contained">Find Me</Button>
        </Box>
        {loggedIn?<Box></Box>:<Button className={styles.secondaryButton} variant="outlined" size="small">Log In</Button>}
    </Box>
  </Box>;
};

export default Header;
