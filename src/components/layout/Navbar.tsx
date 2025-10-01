import Logo from "@/assets/bag.png";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    // Navbar
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5 justify-between">
      <div className="flex items-center">
        <img className="w-[50px]" src={Logo} alt="" />
        <span className="font-bold ml-2">Task Master</span>
      </div>
      <div className="px-2">
        <Link className="px-2" to="/tasks">Tasks</Link>
        <Link className="px-2" to="/users">Users</Link>
        <Link className="px-2" to="/users">Create Users</Link>
      </div>

      <div>
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
