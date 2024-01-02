const Star = ({
  width,
  height,
  fillColor,
  className,
}: {
  width: number;
  height: number;
  fillColor: string;
  className: any;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    fill={"#000"}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect y={45} width={100} height={10} fill={fillColor} />
    <rect
      x={45}
      y={100}
      width={100}
      height={10}
      transform="rotate(-90 45 100)"
      fill={fillColor}
    />
    <rect
      x={11}
      y={81.7107}
      width={100}
      height={10}
      transform="rotate(-45 11 81.7107)"
      fill={fillColor}
    />
    <rect
      x={18.0713}
      y={11}
      width={100}
      height={10}
      transform="rotate(45 18.0713 11)"
      fill={fillColor}
    />
  </svg>
);
export default Star;
