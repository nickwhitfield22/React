import { useForm } from "react-hook-form";
import { useUpdateUser } from "../authentication/useUpdateUser";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email().min(1, { message: "This field is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be a minimum of 6 characters." }),
  // confirmPassword: z
  //   .string()
  //   .min(6, { message: "Password must be a minimum of 6 characters." }),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match",
//   path: ["confirmPassword"],
// });

function UpdateUser() {
  const {
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit(data) {
    updateUser(data);
    console.log(data);
  }

  return (
    <div className="h-screen bg-slate-100">
      <div className=" mx-auto mb-6 mt-0 flex w-full max-w-md flex-col items-center justify-center py-40">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#ff8080]">
          Reset Password
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-0 flex w-full max-w-md flex-col items-center justify-center space-y-4 rounded-lg bg-slate-50 px-6 py-8 shadow"
        >
          <div className="flex flex-col space-y-2">
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
            <label className="mb-1 text-sm font-normal text-black">
              New Password
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
            {/* <label className="mb-1 text-sm font-normal text-black">
              Confirm New Password
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
            )} */}
          </div>
          <button
            disabled={isUpdating}
            className="font- w-[16rem] rounded-lg bg-[#ff8080] py-2 text-white hover:bg-[#ff9580]"
          >
            Update Login Info
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
