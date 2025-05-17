import { Variable } from "../variable/variable.entity";

export class Value {
  private constructor(
    readonly id: string, 
    readonly value: string,
    readonly variable: Variable,
  ) {}

  public static create(value: string, variable: Variable) {
    return new Value(crypto.randomUUID().toString(), value, variable);
  }

  public static with(id: string, value: string, variable: Variable) {
    return new Value(id, value, variable);
  }
}
