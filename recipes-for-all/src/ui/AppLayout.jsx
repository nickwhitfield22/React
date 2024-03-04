import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-3 grid-rows-[auto_1fr]">
      <Header />
      <Sidebar />
      <div className="col-span-2 overflow-scroll overflow-x-hidden bg-slate-200 px-5 pb-5">
        <main className="max-w-3xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
