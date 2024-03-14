import { ReactKeycloakProvider } from "@react-keycloak/web";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import keycloak from "./apis/auth/keycloak.ts";
import Topbar from "./components/Topbar.tsx";
import "./index.css";
import LoginPage from "./pages/LoginPage.tsx";
import ProblemPage from "./pages/ProblemPage.tsx";
import ProblemsListPage from "./pages/ProblemsListPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactKeycloakProvider authClient={keycloak}>
    <Topbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProblemsListPage />} />
        <Route path="/problems/:id" element={<ProblemPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </ReactKeycloakProvider>
);
