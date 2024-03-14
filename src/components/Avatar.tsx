import { useKeycloak } from "@react-keycloak/web";

export default function Avatar() {
    const { keycloak } = useKeycloak();
    return <>Avatar CMP <button onClick={() => keycloak.logout()}>Logout</button></>
}