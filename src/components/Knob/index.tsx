import React, { useMemo, useState } from "react";
import { polarToCartesian } from "../../utils/geometry";

const min = 240;
const max = 300;

interface KnobProps {
  size: number;
  strokeWidth: number;
  color: string;
}

// TODO: min max default props
// TODO: rounding on arcPath

const Knob: React.FC<KnobProps> = ({ size, strokeWidth, color }) => {
  const [value, setValue] = useState(0);

  const [radius, center] = useMemo(() => {
    const radius = (size - strokeWidth) / 2;
    const center = radius + strokeWidth / 2;

    return [radius, center];
  }, [size, strokeWidth]);

  const arcPath = useMemo(() => {
    const [startX, startY] = polarToCartesian(center, center, radius, min);
    const [endX, endY] = polarToCartesian(center, center, radius, max);

    return `M ${startX} ${startY} A ${radius} ${radius} 0 1 1 ${endX} ${endY}`;
  }, [center, radius]);

  const handleMouseDown = (event: React.MouseEvent) => {
    const { clientY: originY } = event; //just Y values for now

    const handleMouseMove = (event: MouseEvent) => {
      //const { clientX, clientY } = event;
      //console.log(`[${clientX}, ${clientY}]`);
      let delta = originY - event.clientY;
      console.log('delta y: ', delta);
      // console.log('value', value);
      if (delta > 150) delta = 150;
      if (delta < -150) delta = -150;
      setValue(delta);
    };

    const handleMouseUp = (event: MouseEvent) => {
      window.removeEventListener("mousemove", handleMouseMove);
      console.log("mouse up fired");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.onmouseup = handleMouseUp;
  };

  console.log('rotation: ', value);
  return (
    <svg width={size} height={size} onMouseDown={handleMouseDown}>
      <path fill="none" stroke={color} strokeWidth={strokeWidth} d={arcPath} />
      <line
        x1={center}
        y1={(center * 2) / 3}
        x2={center}
        y2={center - radius}
        stroke={color}
        strokeWidth={strokeWidth}
        transform={`rotate(${value}, ${center}, ${center})`}
      />
    </svg>
  );
};

export default Knob;
