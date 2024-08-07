import React from "react";
import { useUser } from "../../hooks/useUser";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import { useNavigate } from "react-router-dom";

type Props = {};

const Dashboard = (props: Props) => {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <>
        <h2 className="text-xl font-[600] ">Dashboard</h2>

        <p className="text-[.9rem] font-[500] ">
          Welcome {user?.user.firstName}, you are logged in.
        </p>
        <p className="text-[.8rem] font-[500] mt-6 ">
          Access Token : {user?.accessToken}{" "}
        </p>

        <button
          onClick={() => {
            navigate("/login");
          }}
          className="bg-black text-white font-[500] min-w-[6rem] px-6 h-12 rounded-[6px] mt-8  "
        >
          Logout
        </button>
      </>
    </DashboardLayout>
  );
};

export default Dashboard;
