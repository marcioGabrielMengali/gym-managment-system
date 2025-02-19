import { FastifyInstance } from "fastify";
import { GymController } from "../controllers/gym/gym.controller";
import { container } from "@container/index";

const gymController = container.resolve(GymController);

export const gymRoutes = async (app: FastifyInstance) => {
  app.post("/", gymController.create.bind(gymController));
};
