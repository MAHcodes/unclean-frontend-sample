const AppConfig = {
  url: {
    schema: "https",
    domain: "localhost",
    port: "5001",
    baseUrl: "/api",
  },
};

export type TAppConfig = typeof AppConfig;

export default AppConfig;
