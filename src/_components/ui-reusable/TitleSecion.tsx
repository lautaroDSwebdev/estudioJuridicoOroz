import { ChildrenComp } from "@/types/types";
import React from "react";

const TitleSecion = ({ children }: ChildrenComp) => {
  return <p className="g-yellow-titles my-[2rem] p-[1rem]">{children}</p>;
};

export default TitleSecion;
