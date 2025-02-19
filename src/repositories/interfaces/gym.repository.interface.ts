import { IGym } from "@/http/interfaces/gym/gym.interface";

export interface IGymRepository{
    create(data: IGym): Promise<IGym>,
    findByEin(ein: string): Promise<IGym|null>
}