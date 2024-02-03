import { CSSProperties } from "react";
import { CustomSxProps, UI_KIT } from "../../theme";

export const wrapper: CustomSxProps  = {
    height: UI_KIT.headerHeight,
    position: 'fixed',
    width: "100%",
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
