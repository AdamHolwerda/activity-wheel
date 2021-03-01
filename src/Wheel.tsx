import React, { FunctionComponent, useState } from "react";
import { sample, indexOf } from "underscore";
import activities from "./activities";
import Slice from "./Slice";

const Wheel: FunctionComponent = () => {
  const [activity, setActivity] = useState(sample(activities));
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    let accruingSpinTime = 50;
    const spinterval = setInterval(() => {
      const randomActivity = sample(activities);
      setActivity(randomActivity);
      accruingSpinTime += 50;
      if (accruingSpinTime > 1600) {
        clearInterval(spinterval);
        setSpinning(false);
      }
    }, accruingSpinTime);
  };

  const numActivities = activities.length;
  const slices = activities.map((slice, i) => {
    const unRandom = (i + 0.2) / numActivities;
    const sliceColor = "#" + Math.floor(unRandom * 16777215).toString(16);
    return <Slice name={slice.name} i={i} color={sliceColor} />;
  });

  return (
    <>
      <div
        onClick={handleSpin}
        className="wheel"
        key="wheel"
        style={{
          position: "relative",
          transform: spinning ? "rotate(1080deg)" : "",
          transition: spinning ? "all 1.6s" : "all 0s"
        }}
      >
        {slices}
      </div>
      <h1
        style={{
          color:
            "#" +
            Math.floor(
              ((indexOf(activities, activity) + 0.2) / numActivities) * 16777215
            ).toString(16)
        }}
      >
        {activity.name}
      </h1>
    </>
  );
};

export default Wheel;
