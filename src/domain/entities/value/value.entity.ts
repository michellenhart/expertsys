import { UUID } from "crypto";
import { Variable } from "../variable/variable.entity";

export class Value {
  private constructor(
    readonly id: UUID, 
    readonly value: string,
    readonly variable: Variable,
  ) {}

  public static create(value: string, variable: Variable) {
    return new Value(crypto.randomUUID(), value, variable);
  }

  public static with(id: UUID, value: string, variable: Variable) {
    return new Value(id, value, variable);
  }
}
