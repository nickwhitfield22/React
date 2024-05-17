import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-10 border-r border-slate-600 bg-black">
      <MainNav />
    </aside>
  );
}

export default Sidebar;
