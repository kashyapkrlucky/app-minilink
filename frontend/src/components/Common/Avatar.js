/* eslint-disable react/prop-types */
import React from "react";
import clsx from "clsx";

const Avatar = ({
  user = { fullName: "User Avatar" },
  size = "md",
  alt = "User Avatar",
  className = "",
}) => {
  const sizeStyles = {
    sm: "h-6 w-6 text-sm",
    md: "h-10 w-10 text-lg",
    lg: "h-14 w-14 text-xl",
    xl: "h-20 w-20 text-2xl",
  };

  return (
    <div className={clsx("relative inline-block", className)}>
      {user?.avatar ? (
        <img
          className={clsx("rounded-full object-cover", sizeStyles[size])}
          src={`/avatars/${user.avatar}`}
          alt={alt}
        />
      ) : (
        <div
          className={clsx(
            "rounded-full flex items-center justify-center bg-gray-300 text-gray-700 font-semibold border-2 border-gray-500",
            sizeStyles[size]
          )}
        >
          {user?.fullName ? user.fullName[0].toUpperCase() : "?"}
        </div>
      )}
    </div>
  );
};

export default Avatar;
