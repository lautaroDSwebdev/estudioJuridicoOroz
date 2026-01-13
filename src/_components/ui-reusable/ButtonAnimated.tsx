import React from "react";

interface ChildrenComp {
  children: React.ReactNode;
}

const ButtonAnimated = ({ children }: ChildrenComp) => {
  return (
    <button className="button">
      <span className="button-content">{children}</span>
    </button>
  );
};

export default ButtonAnimated;
