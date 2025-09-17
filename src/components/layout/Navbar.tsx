import Logo from "@/assets/bag.png";
import { Link } from "react-router";


export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <Logo />
        <span className="font-bold ml-2">TaskMaster</span>
      </div>

      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
}
