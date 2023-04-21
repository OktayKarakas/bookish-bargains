import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Point = ({ className, ...rest }: IconProps) => {
  return (
    <div>
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="8" cy="8.5" r="8" fill="#FFCA42" />
      </svg>
    </div>
  );
};

export default Point;
