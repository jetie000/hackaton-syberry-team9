import { CustomSxProps, UI_KIT } from "../../theme";
import { CSSProperties } from "react";

export const mainMovieWrapper: CustomSxProps = {
	display: "flex",
	flexDirection: "column",
	rowGap: UI_KIT.p8,
};

export const imgStyle: CSSProperties = {
	maxHeight: "70vh",
	width: "100%",
	objectFit: "cover",
	objectPosition: "0 20%",
};

export const hrStyles: CSSProperties = {
	margin: `${UI_KIT.p32} 0`,
};
