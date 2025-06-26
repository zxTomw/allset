import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SendBig = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      stroke="#749550"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.25 7.9 10.613-3.537c4.762-1.588 7.35 1.012 5.774 5.774L22.1 20.75c-2.375 7.137-6.275 7.137-8.65 0L12.4 17.6l-3.15-1.05c-7.137-2.375-7.137-6.263 0-8.65ZM12.637 17.063l4.476-4.488"
    />
  </Svg>
);
export { SendBig };
