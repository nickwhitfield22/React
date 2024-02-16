import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSignup } from "./useSignup";
import { Link } from "react-router-dom";

const schema = z
  .object({
    fullName: z.string().min(1, { message: "This field is required." }),
    phone: z.number().min(1, { message: "This field is required." }),
    email: z.string().email().min(1, { message: "This field is required." }),
    password: z
      .string()
      .min(6, { message: "Password must be a minimum of 6 characters." }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be a minimum of 6 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function Signup() {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { signUp, isLoading } = useSignup();

  function onSubmit(data) {
    unregister("confirmPassword");
    signUp(data);
  }

  if (isLoading) return <p>...signing up</p>;
  return (
    <div className="h-screen bg-slate-100">
      <div className=" mx-auto mb-6 mt-0 flex w-full max-w-md flex-col items-center justify-center py-40">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#ff8080]">
          Recipes For All
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-0 flex w-full max-w-md flex-col items-center justify-center space-y-4 rounded-lg bg-slate-50 px-6 py-8 shadow"
        >
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">
              Full Name
            </label>
            <input
              className="w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080]  focus:outline-none focus:ring-2"
              {...register("fullName")}
            />
            {errors?.fullName && (
              <p className="text-xs font-normal text-red-500">
                {errors?.fullName?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">Phone</label>
            <input
              className=" w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080]  focus:outline-none focus:ring-2"
              type="tel"
              {...register("phone", { valueAsNumber: true })}
            />
            {errors?.phone && (
              <p className="text-sm font-normal text-red-500">
                {errors?.phone?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">Email</label>
            <input
              className=" w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080]  focus:outline-none focus:ring-2"
              {...register("email")}
            />
            {errors?.email && (
              <p className="text-sm font-normal text-red-500">
                {errors?.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">
              Password
            </label>
            <input
              className="w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080]  focus:outline-none focus:ring-2"
              type="password"
              {...register("password")}
            />
            {errors?.password && (
              <p className="text-sm font-normal text-red-500">
                {errors?.password?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">
              Confirm Password
            </label>
            <input
              className="w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080]  focus:outline-none focus:ring-2"
              type="password"
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword && (
              <p className="text-sm font-normal text-red-500">
                {errors?.confirmPassword?.message}
              </p>
            )}
            <p className="mt-6 text-right text-sm font-normal">
              Already a member?{" "}
              <Link to="/login" className="text-blue-500">
                Login.
              </Link>
            </p>
          </div>
          <button
            disabled={isLoading}
            className="font- w-[16rem] rounded-lg bg-[#ff8080] py-2 text-white hover:bg-[#ff9580]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
