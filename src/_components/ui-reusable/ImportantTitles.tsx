import { ChildrenComp } from "@/types/types";
import React from "react";

const ImportantTitles = ({ children }: ChildrenComp) => {
  return <b className="font-semibold text-[2rem] lg:text-[3rem]  my-[2rem] p-[1rem]">{children}</b>;
};

export default ImportantTitles;
