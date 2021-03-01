import React, { FunctionComponent } from "react";
import activities from "./activities";

interface SliceProps {
  i: number;
  name: string;
  color: string;
}

const Slice: FunctionComponent<SliceProps> = ({ i, name, color }) => (
  <div
    key={name}
    className="slice"
    style={{
      position: "absolute",
      left: "25vmin",
      top: "25vmin",
      fontSize: "2.6vmin",
      textAlign: "right",
      zIndex: i,
      transform:
        "rotate(" +
        (360 / activities.length) * (i + 1) +
        "deg) translateY(-0.8vmin) translateX(-0.8vmin)",
      transformOrigin: "top left",
      width: "26vmin",
      paddingRight: "1vmin",
      color: color
    }}
  >
    {name}
  </div>
);

export default Slice;
