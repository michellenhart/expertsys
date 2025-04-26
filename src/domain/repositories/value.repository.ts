import { Value } from "../entities/value/value.entity";
import { DefaultRepository } from "./default.repository";

export interface ValueRepository extends DefaultRepository<Value> {
  
}