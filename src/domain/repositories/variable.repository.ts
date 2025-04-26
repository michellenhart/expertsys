import { Variable } from "../entities/variable/variable.entity";
import { DefaultRepository } from "./default.repository";

export interface VariableRepository extends DefaultRepository<Variable> {
  
}