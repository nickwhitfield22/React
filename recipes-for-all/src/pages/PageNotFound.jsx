import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/authentication/useUser';

function PageNotFound() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();

  return (
    <div className="mx-auto mt-10 flex w-1/2 flex-col items-center justify-center space-y-10 rounded-md bg-slate-200 px-20 py-16 ">
      <div className="space-y-10 text-center text-2xl font-semibold">
        <p className=" text-gray-600">Page Not Found</p>
        <p className="bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text text-transparent">
          Please try again.
        </p>
      </div>
      <button
        onClick={() => navigate('/')}
        className=" rounded-lg bg-[#ff8080] px-5 py-3 font-mono text-white"
      >
        Return to Homepage
      </button>
    </div>
  );
}

export default PageNotFound;
