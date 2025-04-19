import { Value } from "../value/value.entity";
import { Variable } from "../variable/variable.entity";
import { ConditionConnective } from "./condition-connective.enum";
import { ConditionOperator } from "./condition-operator.enum";

export class Condition {
  private constructor(
    readonly variable: Variable,
    readonly operator: ConditionOperator,
    readonly value: Value,
    readonly connective: ConditionConnective
  ) {}

  public static create(
    variable: Variable,
    operator: ConditionOperator,
    value: Value,
    connective: ConditionConnective
  ) {
    return new Condition(variable, operator, value, connective);
  }
}

