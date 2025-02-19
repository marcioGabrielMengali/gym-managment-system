import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";

export const handleErrorMiddleware = async (
  // eslint-disable-next-line
  error: any,
  req: FastifyRequest,
  res: FastifyReply
) => {
  if (error instanceof ZodError) {
    req.log.error({ errors: error.format() }, "Validation Error");
    return res
      .status(400)
      .send({ message: "Validation Error", errors: error.format() });
  }
  req.log.error({ message: error.message, status: error.status, err: error.err }, "Error");
  return res.status(error.status).send({ message: error.message });
};
