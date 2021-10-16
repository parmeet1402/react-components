import React from "react";
import PropTypes from "prop-types";

const TimesIcon = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.93934 18.9393C2.35355 19.5251 2.35355 20.4749 2.93934 21.0607C3.52513 21.6464 4.47487 21.6464 5.06066 21.0607L12 14.1213L18.9393 21.0607C19.5251 21.6465 20.4749 21.6465 21.0607 21.0607C21.6464 20.4749 21.6464 19.5251 21.0607 18.9393L14.1213 12L21.0607 5.06066C21.6464 4.47487 21.6464 3.52513 21.0607 2.93934C20.4749 2.35355 19.5251 2.35355 18.9393 2.93934L12 9.87868L5.06066 2.93934C4.47487 2.35356 3.52513 2.35356 2.93934 2.93934C2.35355 3.52513 2.35355 4.47488 2.93934 5.06066L9.87868 12L2.93934 18.9393Z"
        fill="white"
      />
    </svg>
  );
};

const CustomIcon = ({ icon, ...restProps }) => {
  if (icon === "times") {
    return <TimesIcon {...restProps} />;
  }

  return <div></div>;
};

CustomIcon.propTypes = {
  icon: PropTypes.oneOf(["times"]),
};

export default CustomIcon;
