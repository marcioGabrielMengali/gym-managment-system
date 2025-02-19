import { IGym } from "./gym.interface";

export interface IGymService{
    create(data: IGym): Promise<void>
}