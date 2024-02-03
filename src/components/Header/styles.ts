import { CSSProperties } from "react";
import { CustomSxProps, UI_KIT } from "../../theme";

export const wrapper: CustomSxProps = {
	height: UI_KIT.headerHeight,
	position: "fixed",
	width: "100%",
	display: "flex",
	padding: `${UI_KIT.p8} ${UI_KIT.p32}`,
	color: UI_KIT.textColor,
	boxShadow: UI_KIT.boxShadow1,
	boxSizing: "border-box",
	top: 0,
	backgroundColor: "white",
	"& div": {
		alignSelf: "center",
		display: "flex",
		columnGap: UI_KIT.p8,
	},
};

export const iconStyle: CSSProperties = {
	maxHeight: UI_KIT.headerHeight,
	width: "auto",
};

export const buttonCommon: CustomSxProps = {
	fontSize: UI_KIT.p12,
	textTransform: "none",
};

export const searchWrapper: CustomSxProps = {
	position: "absolute",
	display: "flex",
	zIndex: 3,
	flexDirection: "column",
	top: UI_KIT.headerHeight,
	backgroundColor: "white",
	"&>div": {
		borderBottom: "1px solid grey",
		width: "100%",
		padding: "4px",
		"&:hover": {
			backgroundColor: "lightgrey",
		},
	},
};
