import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="flex flex-col gap-10 border-r bg-slate-100">
      <MainNav />
    </aside>
  );
}

export default Sidebar;
