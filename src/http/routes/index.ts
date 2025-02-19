import { FastifyInstance } from "fastify";
import { gymRoutes } from "./gym.routes";
import { handleErrorMiddleware } from "../handlers/error.handlers";

export const appRoutes = async (app: FastifyInstance) => {
    app.setErrorHandler(handleErrorMiddleware)
    app.register(gymRoutes, {prefix: '/gym'})
}