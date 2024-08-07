import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Oval } from "react-loader-spinner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

type Props = {};

type LoaderProps = {
  size: number;
  color: string;
};

const ButtonLoader = ({ size, color }: LoaderProps) => {
  return (
    <Oval
      visible={true}
      height={size ?? 25}
      width={size ?? 25}
      color={color ?? "#fff"}
      ariaLabel="oval-loading"
      strokeWidth={5}
    />
  );
};

const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

interface LoginProps {
  email: string;
  password: string;
}

const Login = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginProps>({
    resolver: yupResolver(loginSchema),
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const { setUser } = useUser();

  const loginMutation = useMutation({
    mutationFn: async (data: LoginProps) => {
      const loginData = {
        identifier: data?.email,
        password: data?.password,
        role: ["user"],
        client: "web",
      };
      const res = await axios.post(
        "https://staging-api.thecircularnet.com/api/v1/auth/login",
        loginData
      );
      return res.data;
    },
    onSuccess: (data) => {
      console.log(data.data);
      setUser(data.data);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = (data: LoginProps) => {
    loginMutation.mutate(data);
  };

  return (
    <>
      <div className="min-h-[100vh] w-full bg-neutral-50 grid grid-cols-12 relative">
        <div className="absolute top-8 left-8">
          <img
            src="/logoIcon.svg"
            alt="logo"
            className="w-14 h-14 shadow-md rounded-lg"
          />
        </div>
        <div className="hidden lg:block lg:col-span-5 bg-neutral-100 min-h-[100vh]"></div>
        <div className="col-span-12 lg:col-span-7 flex items-center justify-center">
          <div className="max-w-[24rem] w-full min-h-[300px] border rounded-[16px] bg-white p-6 space-y-6 mx-6 sm:mx-0">
            <h1 className="font-[700] text-2xl">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div className="space-y-1">
                <p className="text-sm font-[500]">Email Address</p>
                <input
                  type="text"
                  {...register("email")}
                  className="w-full h-12 border focus:border-black focus:outline-none rounded-[8px] px-4 py-1.5 font-[500]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-[500]">Password</p>
                <input
                  type="password"
                  {...register("password")}
                  className="w-full h-12 border focus:border-black focus:outline-none rounded-[8px] px-4 py-1.5 font-[500]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="space-y-3 pt-3">
                <button
                  type="submit"
                  className="bg-black text-white font-[600] w-full h-12 rounded-[6px] flex items-center justify-center "
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <ButtonLoader size={25} color="#fff" />
                  ) : (
                    "Login"
                  )}
                </button>
                <button
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  disabled={loginMutation.isPending}
                  className="bg-neutral-100 text-neutral-600 font-[600] w-full h-12 rounded-[6px]"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
