import { UUID } from "crypto";
import { Rule } from "../rule/rule.entity";

export class Base {
  private constructor(
    readonly id: UUID, 
    readonly name: string, 
    readonly rules: Rule[]
  ) {}

  public static create(name: string, rules: Rule[]) {
    return new Base(crypto.randomUUID(), name, rules);
  }

  public static with(id: UUID, name: string, rules: Rule[]) {
    return new Base(id, name, rules);
  }
}
