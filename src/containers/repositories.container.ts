import { IGymRepository } from "@/repositories/interfaces/gym.repository.interface";
import { PrismaGymRepository } from "@/repositories/prisma-gym.repository";
import { container } from "tsyringe";

container.registerSingleton<IGymRepository>(
  PrismaGymRepository.name,
  PrismaGymRepository
);

export { container };
