import { useForm } from "react-hook-form";
import { useRecoverPassword } from "./useRecoverPassword";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z
    .string()
    .email()
    .min(1, { message: "Please enter your email address." }),
});

function PasswordRecovery() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { recover, isPending } = useRecoverPassword();

  function onSubmit(data) {
    recover(data);
  }

  if (isPending) return <Spinner />;
  return (
    <div className="h-screen bg-slate-100">
      <div className=" mx-auto mb-6 mt-0 flex w-full max-w-md flex-col items-center justify-center py-40">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#ff8080]">
          Enter your email below
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
          <button className="w-[16rem] rounded-lg bg-[#ff8080] py-2 font-semibold text-white hover:bg-[#ff9580]">
            Recover password
          </button>
        </form>
      </div>
    </div>
  );
}

export default PasswordRecovery;
