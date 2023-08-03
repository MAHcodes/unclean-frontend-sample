import axios from "axios";
import app from "./app";

const { schema, domain, port, baseUrl } = app.url;

export const Api = axios.create({
  baseURL: `${schema}://${domain}:${port}${baseUrl}`,
});
