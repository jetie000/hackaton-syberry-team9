import { SxProps, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
const theme = createTheme();

export type CustomSxProps = SxProps<typeof theme>;

const p8 = 8;
const p12 = 12;
const p16 = 16;
const p32 = 32;

export const UI_KIT = {
	textColor: grey[900],
	grey: grey[500],
	secondaryGrey: grey[300],

	boxShadow1: 1,
	boxShadow2: 2,

	p8: p8 + "px",
	p16: p16 + "px",
	p32: p32 + "px",
	p12: p12 + "px",

	headerHeight: 50 + p8 + p8 + "px",
};
