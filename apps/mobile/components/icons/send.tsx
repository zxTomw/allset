import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SendIcon = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <Path
      stroke="#749550"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.242 4.477 6.013-2.005c2.7-.9 4.165.574 3.273 3.273l-2.005 6.013c-1.345 4.045-3.555 4.045-4.901 0l-.595-1.785-1.785-.595c-4.045-1.346-4.045-3.548 0-4.901ZM7.161 9.669l2.536-2.543"
    />
  </Svg>
);
export { SendIcon };
