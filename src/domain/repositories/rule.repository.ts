import { Rule } from "../entities/rule/rule.entity";
import { DefaultRepository } from "./default.repository";

export interface RuleRepository extends DefaultRepository<Rule> {
  
}