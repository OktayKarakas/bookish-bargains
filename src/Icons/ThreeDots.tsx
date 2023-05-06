interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const ThreeDots = ({ className, ...rest }: IconProps) => {
  return (
    <div className={className}>
      <svg
        width="24"
        height="7"
        viewBox="0 0 24 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.0003 1.66683C13.0128 1.66683 13.8337 2.48764 13.8337 3.50016C13.8337 4.51268 13.0128 5.3335 12.0003 5.3335C10.9878 5.3335 10.167 4.51268 10.167 3.50016C10.167 2.48764 10.9878 1.66683 12.0003 1.66683Z"
          stroke="#FFCA42"
          strokeWidth="1.5"
        />
        <path
          d="M21.1663 1.66683C22.1789 1.66683 22.9997 2.48764 22.9997 3.50016C22.9997 4.51268 22.1789 5.3335 21.1663 5.3335C20.1538 5.3335 19.333 4.51268 19.333 3.50016C19.333 2.48764 20.1538 1.66683 21.1663 1.66683Z"
          stroke="#FFCA42"
          strokeWidth="1.5"
        />
        <path
          d="M2.83333 1.66683C3.84586 1.66683 4.66667 2.48764 4.66667 3.50016C4.66667 4.51268 3.84586 5.3335 2.83333 5.3335C1.82081 5.3335 1 4.51268 1 3.50016C1 2.48764 1.82081 1.66683 2.83333 1.66683Z"
          stroke="#FFCA42"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};

export default ThreeDots;
