interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  className2?: string;
  classNameMain?: string;
}

const HalfRatingBall = ({
  className,
  className2,
  classNameMain,
  ...rest
}: IconProps) => {
  return (
    <div className={`relative flex items-center ${classNameMain}`}>
      <svg
        width="6"
        height="18"
        viewBox="0 0 7 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M6.66667 13.3333C5.83496 13.3333 5.0114 13.1695 4.243 12.8512C3.47461 12.5329 2.77643 12.0664 2.18832 11.4783C1.60022 10.8902 1.13371 10.192 0.815429 9.42362C0.497149 8.65523 0.333333 7.83166 0.333333 6.99996C0.333333 6.16825 0.497149 5.34469 0.81543 4.5763C1.13371 3.8079 1.60022 3.10972 2.18832 2.52162C2.77643 1.93351 3.47461 1.467 4.243 1.14872C5.0114 0.830442 5.83496 0.666626 6.66667 0.666626L6.66667 6.99996L6.66667 13.3333Z"
          fill="#FFCA42"
        />
      </svg>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className2}
      >
        <circle cx="10" cy="10.5" r="9.5" stroke="#FFCA42" />
      </svg>
    </div>
  );
};

export default HalfRatingBall;
