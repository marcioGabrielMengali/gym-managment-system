import { IGymController } from "@/http/interfaces/gym/gym.controller.interface";
import { IGymService } from "@/http/interfaces/gym/gym.service.interface";
import { GymService } from "@/http/services/gym/gym.service";
import { FastifyRequest, FastifyReply } from "fastify";
import { inject, injectable } from "tsyringe";
import { createGymValidationSchema } from "./validations/gym.validation";

@injectable()
export class GymController implements IGymController {
  constructor(
    @inject(GymService.name)
    private readonly service: IGymService,

  ) {}
  async create(req: FastifyRequest, res: FastifyReply): Promise<void> {
    const data = createGymValidationSchema.parse(req.body)
    await this.service.create(data);
    return res.status(201).send();
  }
}
