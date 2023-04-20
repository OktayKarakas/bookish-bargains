import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Book = ({ className, ...rest }: IconProps) => {
  return (
    <div className={className}>
      <svg
        width="26"
        height="29"
        viewBox="0 0 26 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.31348 22.9H25.25V0.5H4.2557C2.32228 0.506417 0.756356 2.08725 0.75 4.03908V24.6646H0.750578C0.750578 24.6733 0.75 24.6821 0.75 24.6908C0.75 26.7558 2.35521 28.5 4.2557 28.5H25.25V26.6333H4.2557C3.38895 26.6333 2.59906 25.7076 2.59906 24.6908C2.59906 23.7202 3.38433 22.9 4.31348 22.9ZM6.29717 2.38592H11.8443V12.4671L9.04764 9.9885L6.29717 12.4525V2.38592ZM2.59906 4.05367C2.59617 3.12617 3.33695 2.37192 4.2557 2.36667H4.44811H6.29717H4.44811V14.9667H6.27637L9.05458 12.4782L11.8617 14.9667H13.6934V2.36667H23.4009V21.0333H6.30179H4.45274H4.31348C3.71196 21.0333 3.12141 21.192 2.59963 21.493V4.05367H2.59906Z"
          fill="#FFCA42"
        />
      </svg>
    </div>
  );
};

export default Book;
