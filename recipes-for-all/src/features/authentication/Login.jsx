import { useState } from 'react';
import { useLogin } from './useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    login({ email, password });
  }

  if (isLoading) return <p>...loading</p>;
  return (
    <div className="h-screen bg-slate-100">
      <div className=" mx-auto mb-6 mt-0 flex w-full max-w-md flex-col items-center justify-center py-40">
        <h1 className="mb-6 text-center text-2xl font-bold text-[#ff8080]">
          Recipes For All
        </h1>
        <form className="mx-auto mt-0 flex w-full max-w-md flex-col items-center justify-center space-y-4 rounded-lg bg-slate-50 px-6 py-8 shadow">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">Email</label>
            <input
              className=" w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080] transition-all duration-300 focus:w-[18rem] focus:outline-none focus:ring-2"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-normal text-black">
              Password
            </label>
            <input
              className="w-[16rem] rounded-lg px-4 py-1 ring-[#ff8080] transition-all duration-300 focus:w-[18rem] focus:outline-none focus:ring-2"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
