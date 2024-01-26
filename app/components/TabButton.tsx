import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " border-b border-blue-400"
    : "hover:text-slate-300 text-slate-500";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibol  ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
