import React, { useMemo, useState } from 'react';

interface KnobProps {
  size: number;
  strokeWidth: number;
  color: string;
}

const Knob: React.FC<KnobProps> = ({
  size,
  strokeWidth,
  color
}) => {
  const [value, setValue] = useState(0); 
  
  const radius = (size - strokeWidth) / 2;
  const center = radius + strokeWidth / 2;

  const handleMouseDown = (event: React.MouseEvent) => {
    //const { clientY: originY } = event; //just Y values for now

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      console.log(`[${clientX}, ${clientY}]`);
      /*
      const delta = originY - moveEvent.clientY;
      console.log('delta y: ', delta);
      setValue(delta);
      */
    };
    
    const handleMouseUp = (event: MouseEvent) => {
      window.removeEventListener('mousemove', handleMouseMove);
      console.log('mouse up fired');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.onmouseup = handleMouseUp;
  };

  return (
    <svg width={size} height={size} onMouseDown={handleMouseDown}>
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <line
        x1={center}
        y1={center * 2 / 3}
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
