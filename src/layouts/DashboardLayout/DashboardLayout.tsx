import React from "react";
import BottomNav from "./bottomNav";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] py-5 ">
        <div className="w-full p-6 ">{children}</div>

        <div className="fixed bottom-0 border h-[4.75rem] w-full ">
          <BottomNav />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
