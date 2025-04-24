import { Rule } from "../rule/rule.entity";

export class Base {
  private constructor(readonly name: string, readonly rules: Rule[]) {}

  public static create(name: string, rules: Rule[]) {
    return new Base(name, rules);
  }
}
