interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Facebook = ({ className, ...rest }: IconProps) => {
  return (
    <div className={className}>
      <svg
        width="10"
        height="19"
        viewBox="0 0 10 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.18359 10.375L9.67578 7.14062H6.54688V5.03125C6.54688 4.11719 6.96875 3.27344 8.375 3.27344H9.81641V0.496094C9.81641 0.496094 8.51562 0.25 7.28516 0.25C4.71875 0.25 3.03125 1.83203 3.03125 4.64453V7.14062H0.148438V10.375H3.03125V18.25H6.54688V10.375H9.18359Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Facebook;
