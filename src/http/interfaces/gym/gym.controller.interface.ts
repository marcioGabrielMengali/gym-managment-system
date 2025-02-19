import { FastifyReply, FastifyRequest } from "fastify";

export interface IGymController {
    create(req: FastifyRequest, res: FastifyReply): Promise<void>
}