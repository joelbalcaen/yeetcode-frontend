interface AppConfig {
  url: {
    KEYCLOAK_BASE_URL: string;
    API_BASE_URL: string
  };
}

const prod: AppConfig = {
  url: {
    KEYCLOAK_BASE_URL: "",
    API_BASE_URL: "",
  },
};

const dev: AppConfig = {
  url: {
    KEYCLOAK_BASE_URL: "http://localhost:8081",
    API_BASE_URL: "http://localhost:8080",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
