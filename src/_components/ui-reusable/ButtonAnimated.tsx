import { ChildrenComp } from "@/types/types";
import React from "react";


const ButtonAnimated = ({ children }: ChildrenComp) => {
  return (
    <button className="button">
      <span className="button-content">{children}</span>
    </button>
  );
};

export default ButtonAnimated;
