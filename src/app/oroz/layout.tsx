import React from "react";
import { Header } from "../_components";
import { Fotter } from "../_components/Fotter";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Fotter />
    </div>
  );
};

export default layout;
