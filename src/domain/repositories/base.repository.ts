import { Base } from "../entities/base/base.entity";
import { DefaultRepository } from "./default.repository";

export interface BaseRepository extends DefaultRepository<Base> {
  
}