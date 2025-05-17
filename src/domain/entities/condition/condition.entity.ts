import { Rule } from "../rule/rule.entity";
import { Value } from "../value/value.entity";
import { Variable } from "../variable/variable.entity";
import { ConditionConnective } from "./condition-connective.enum";
import { ConditionOperator } from "./condition-operator.enum";

export class Condition {
  private constructor(
    readonly id: string,
    readonly variable: Variable,
    readonly operator: ConditionOperator,
    readonly value: Value,
    readonly connective: ConditionConnective,
    readonly rule: Rule
  ) {}

  public static create(variable: Variable, operator: ConditionOperator, value: Value, connective: ConditionConnective, rule: Rule) {
    return new Condition(crypto.randomUUID().toString(), variable, operator, value, connective, rule);
  }

  public static with(id: string, variable: Variable, operator: ConditionOperator, value: Value, connective: ConditionConnective, rule: Rule) {
      return new Condition(id, variable, operator, value, connective, rule); 
    }
}

