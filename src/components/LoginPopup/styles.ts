import { CustomSxProps, UI_KIT } from "@/theme";

export const wrapper: CustomSxProps = {
	height: UI_KIT.headerHeight,
	position: "fixed",
	width: "100%",
	display: "flex",
	padding: `${UI_KIT.p8} ${UI_KIT.p32}`,
	color: UI_KIT.textColor,
	boxShadow: UI_KIT.boxShadow1,
	boxSizing: "border-box",
	"& div": {
		alignSelf: "center",
		display: "flex",
		columnGap: UI_KIT.p8,
	},
};
