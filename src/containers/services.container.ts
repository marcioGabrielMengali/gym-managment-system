import { IGymService } from "@/http/interfaces/gym/gym.service.interface";
import { GymService } from "@/http/services/gym/gym.service";
import { container } from "tsyringe";

container.registerSingleton<IGymService>(GymService.name, GymService);

export { container };
