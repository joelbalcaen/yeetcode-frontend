import { useKeycloak } from "@react-keycloak/web";

export default function LoginPage() {
  const { keycloak } = useKeycloak();

  const handleGithubLogin = () => {
    keycloak.login();
  };

  return (
    <div>
      <button onClick={handleGithubLogin}>Login with Github</button>
    </div>
  );
}
