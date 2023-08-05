const AppConfig = {
  url: {
    schema: "http",
    domain: "localhost",
    port: "5000",
    baseUrl: "/api",
  },
};

export type TAppConfig = typeof AppConfig;

export default AppConfig;
