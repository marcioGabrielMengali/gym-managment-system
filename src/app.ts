import "reflect-metadata";
import fastify from "fastify";
import { appRoutes } from "./http/routes";

export const app = fastify({
  logger: {
    serializers: {
      res(reply) {
        return {
          statusCode: reply.statusCode,
        };
      },
      req(request) {
        return {
          method: request.method,
          url: request.url,
          path: request.routeOptions.url,
          parameters: request.params,
        };
      },
    },
  },
});
app.register(appRoutes);
