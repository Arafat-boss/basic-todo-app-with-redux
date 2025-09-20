import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>    
      <Navbar />

      <div className="container mx-auto mt-10">
        <Outlet />
      </div>
    </>
  );
}

export default App;
