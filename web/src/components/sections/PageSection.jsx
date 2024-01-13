import React, { useState } from "react";

export default function PageSection({ title, children }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="max-w-5xl mx-auto mb-10"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <h1
        className={`mb-8 font-title max-w-max  text-3xl transition duration-500 ${
          isHover ? "text-blue-500 translate-y-1 translate-x-1" : ""
        }`}
      >
        {title}
      </h1>
      <div
        className={`${
          isHover ? "border-l pl-8 border-blue-500" : ""
        } transition-all duration-500`}
      >
        {children}
      </div>
    </div>
  );
}
