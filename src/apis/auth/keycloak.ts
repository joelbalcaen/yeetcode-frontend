import Keycloak from "keycloak-js";
import { config } from "../../constants";

const keycloak = new Keycloak({
  url: config.url.KEYCLOAK_BASE_URL,
  realm: "yeetcode",
  clientId: "yeetcode-frontend",
});

export default keycloak;
