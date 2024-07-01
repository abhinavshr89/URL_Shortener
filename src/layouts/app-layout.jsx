// import Header from "@/components/header";
import {Outlet} from "react-router-dom";
import Header from "@/components/Header";
const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header/>
        <Outlet />
      </main>
      
    </div>
  );
};

export default AppLayout;