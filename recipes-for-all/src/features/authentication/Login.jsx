import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "Please enter your email address." }),
  password: z.string().min(1, { message: "Please enter your password" }),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { login, isLoading } = useLogin();

  function onSubmit(data) {
    login(data);
  }

  if (isLoading) return <p>...loading</p>;
  return (
    <div className="h-screen bg-slate-100">
      <div className=" mx-auto mb-6 mt-0 flex w-full max-w-md flex-col items-center justify-center py-40">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#ff8080]">
          Recipes For All
        </h1>
        <form
          className="mx-auto mt-0 flex w-full max-w-md flex-col items-center justify-center space-y-4 rounded-lg bg-slate-50 px-6 py-8 shadow"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">Email</label>
            <input
              className=" w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080] focus:outline-none focus:ring-2"
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-xs font-normal text-red-500">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">
              Password
            </label>
            <input
              className="w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080] focus:outline-none focus:ring-2"
              type="password"
              {...register("password")}
            />
            {errors?.password && (
              <p className="text-xs font-normal text-red-500">
                {errors?.password?.message}
              </p>
            )}
            <p className="mt-6 text-right text-sm font-normal ">
              Not a member?{" "}
              <Link to="/signup" className="text-blue-500">
                Sign up
              </Link>
            </p>
          </div>
          <button
            className="w-[16rem] rounded-lg bg-[#ff8080] py-2 font-semibold text-white hover:bg-[#ff9580]"
            onClick={handleSubmit}
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
