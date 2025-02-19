import { IGym } from "@/http/interfaces/gym/gym.interface";
import { IGymRepository } from "./interfaces/gym.repository.interface";
import { InternalServerError } from "@/http/errors/internal-server-error.error";
import { PrismaClient } from "@prisma/client";

export class PrismaGymRepository implements IGymRepository {
  client: PrismaClient;
  constructor() {
    this.client = new PrismaClient();
  }
  async create(data: IGym): Promise<IGym> {
    try {
      const gym = await this.client.gym.create({
        data,
      });
      return gym;
    } catch (err) {
      throw new InternalServerError(err);
    }
  }
  async findByEin(ein: string): Promise<IGym | null> {
    try {
      const gym = await this.client.gym.findUnique({
        where: {
          ein,
        },
      });
      return gym;
    } catch (err) {
      throw new InternalServerError(err);
    }
  }
}
