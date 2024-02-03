import { CSSProperties } from "react";
import { CustomSxProps, UI_KIT } from "../../theme";

export const wrapper: CustomSxProps = {
	color: UI_KIT.textColor,
	width: "100%",
};

export const infoWrapper: CustomSxProps = {
	minHeight: "60vh",
	width: "100%",
	display: "flex",
	columnGap: UI_KIT.p16,
};

export const imgStyles: CSSProperties = {
	height: "60vh",
	borderRadius: UI_KIT.p16,
};

export const infoText: CustomSxProps = {
	backgroundColor: (theme) => theme.palette.grey[200],
	width: "100%",
	borderRadius: UI_KIT.p16,
	p: UI_KIT.p16,
	display: "flex",
	flexDirection: "column",
	textAlign: "left",
	position: "relative",
};

export const watchButton: CustomSxProps = {
	width: "auto",
	position: "absolute",
	top: UI_KIT.p16,
	right: UI_KIT.p16,
};

export const filmCharachs: CustomSxProps = {
	display: "flex",
	flexFlow: "row wrap",
	mt: UI_KIT.p32,
	mb: UI_KIT.p32,
	"& p": {
		width: `calc(100%/2 - 2px)`,
	},
};

export const bold: CustomSxProps = {
	fontWeight: "600",
};

export const mainRolesSection: CSSProperties = {
	marginTop: UI_KIT.p32,
};

export const mainRolesTitle: CSSProperties = {
	marginBottom: UI_KIT.p32,
	textAlign: "left"
};

export const rolesImage: CSSProperties = {
	maxHeight: "30vh",
	borderRadius: UI_KIT.p16,
};
