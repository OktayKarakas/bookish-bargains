interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const RatingBall = ({ className, ...rest }: IconProps) => {
  return (
    <div>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="10" cy="10.5" r="10" fill="#FFCA42" />
      </svg>
    </div>
  );
};

export default RatingBall;
