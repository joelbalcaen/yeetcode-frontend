import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import ProblemsListPage from "./pages/ProblemsListPage";
import ProblemPage from "./pages/ProblemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <ProblemsListPage /> },
      { path: "/problems/:id", element: <ProblemPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
