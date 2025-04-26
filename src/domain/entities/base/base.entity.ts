import { UUID } from "crypto";
import { Rule } from "../rule/rule.entity";

export type BaseProps = {
  id: UUID;
  name: String;
  rules: Rule[];
}

export class Base {
  private constructor(
    readonly id: UUID, 
    readonly name: String, 
    readonly rules: Rule[]
  ) {}

  public static create(name: string, rules: Rule[]) {
    return new Base(crypto.randomUUID(), name, rules);
  }

  public static with(id: UUID, name: string, rules: Rule[]) {
    return new Base(id, name, rules);
  }
}
