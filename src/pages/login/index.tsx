const Login = () => {
  return (
    <div>
      <div className="">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-black text-white min-w-[6rem] px-4 h-12 rounded-[8px] "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
