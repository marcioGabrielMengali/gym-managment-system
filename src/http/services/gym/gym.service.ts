import { ConflictError } from "@/http/errors/conflict-error";
import { EErrorMessage } from "@/http/errors/enums/errors-message.enum";
import { IGym } from "@/http/interfaces/gym/gym.interface";
import { IGymService } from "@/http/interfaces/gym/gym.service.interface";
import { IGymRepository } from "@/repositories/interfaces/gym.repository.interface";
import { PrismaGymRepository } from "@/repositories/prisma-gym.repository";
import { inject, injectable } from "tsyringe";

@injectable()
export class GymService implements IGymService {
  constructor(
    @inject(PrismaGymRepository.name)
    private readonly repository: IGymRepository
  ) {}
  async create(data: IGym): Promise<void> {
    const gym = await this.repository.findByEin(data.ein)
    if(gym){
        throw new ConflictError('Gym Already Exists!', EErrorMessage.ALREADY_EXISTS)
    }
    await this.repository.create(data);
    return;
  }
}
