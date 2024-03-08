import { Outlet } from "react-router-dom";
import Topbar from "../components/Topbar";

export default function Root() {
  return (
    <div>
      <Topbar />
      <Outlet />
    </div>
  );
}
