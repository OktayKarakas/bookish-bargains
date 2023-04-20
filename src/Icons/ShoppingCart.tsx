import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const ShoppingCartIcon = ({ className, ...rest }: IconProps) => (
  <div>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1.75H5L7.68 15.14C7.77144 15.6004 8.02191 16.014 8.38755 16.3083C8.75318 16.6026 9.2107 16.759 9.68 16.75H19.4C19.8693 16.759 20.3268 16.6026 20.6925 16.3083C21.0581 16.014 21.3086 15.6004 21.4 15.14L23 6.75H6M10 21.75C10 22.3023 9.55228 22.75 9 22.75C8.44772 22.75 8 22.3023 8 21.75C8 21.1977 8.44772 20.75 9 20.75C9.55228 20.75 10 21.1977 10 21.75ZM21 21.75C21 22.3023 20.5523 22.75 20 22.75C19.4477 22.75 19 22.3023 19 21.75C19 21.1977 19.4477 20.75 20 20.75C20.5523 20.75 21 21.1977 21 21.75Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

export default ShoppingCartIcon;
