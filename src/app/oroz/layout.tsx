import { Header } from "@/_components";
import { Fotter } from "@/_components/Fotter";
import React from "react";

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
