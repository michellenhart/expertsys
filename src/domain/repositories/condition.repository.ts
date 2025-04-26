import { Condition } from "../entities/condition/condition.entity";
import { DefaultRepository } from "./default.repository";

export interface ConditionRepository extends DefaultRepository<Condition> {
  
}