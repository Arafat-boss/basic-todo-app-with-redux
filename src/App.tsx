import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>    
      <Navbar />

      <div className="flex justify-center items-center min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
