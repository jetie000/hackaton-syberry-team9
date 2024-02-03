import { CSSProperties } from "react";
import { CustomSxProps, UI_KIT } from "../../theme";

export const wrapper: CustomSxProps = {
  color: UI_KIT.textColor,
  width: "100%",
};

export const infoWrapper: CustomSxProps = {
  height: "50%",
  width: "100%",
  display: "flex",
  columnGap: UI_KIT.p16,
};

export const imgStyles: CSSProperties = {
  height: "100%",
  width: "100%",
};
