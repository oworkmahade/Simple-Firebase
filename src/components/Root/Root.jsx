import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header/Header";

const Root = () => {
  return (
    <div className="w-5/6 p-2 mx-auto border-2 border-slate-300">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
