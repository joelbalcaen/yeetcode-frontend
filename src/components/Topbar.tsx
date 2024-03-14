import { useKeycloak } from "@react-keycloak/web";
import Avatar from "./Avatar";

export default function Topbar() {
    const {keycloak} = useKeycloak()

    return (
      <div>
        {keycloak.authenticated ? <Avatar /> : "Login or register"}
      </div>
    );
}