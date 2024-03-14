import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import ProblemsListPage from "./pages/ProblemsListPage";
import ProblemPage from "./pages/ProblemPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ProblemsListPage /> },
      { path: "/problems/:id", element: <ProblemPage /> },
      {path: "/login", element: <LoginPage/>}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
