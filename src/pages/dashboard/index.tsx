const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className=" text-3xl font-[700]  ">Dashboard</h1>
      <button
        onClick={() => (window.location.href = "/login")}
        className="bg-black text-white min-w-[6rem] px-4 h-12 rounded-[6px] "
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
