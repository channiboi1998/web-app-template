import ky from "ky";
import { RequestHeader } from "@/contants/request-header";

/**
 * Base HTTP client for all generated client
 */
const baseHttpClient = ky.create({
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        // Interceptors if needed
      },
    ],
  },
});

/**
 * HTTP Client for web service
 */
export const webHttpClient = baseHttpClient.extend({
  prefixUrl: "https://api.restful-api.dev", // TODO: should be in config
  headers: {
    [RequestHeader.ContentType]: "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // before request event (prepare additional headers, auth, etc etc)
      },
    ],
  },
});
