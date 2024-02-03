import React from "react";

import {ReactComponent as Logo} from "../../assets/logo.svg"

import styles from "./styles.module.scss";
import { Box } from "@mui/material";

const Header = () => {
  return <Box className={styles.wrapper} component="header">
    <Logo/>
  </Box>;
};

export default Header;
