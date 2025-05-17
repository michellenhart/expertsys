import { Base } from "../base/base.entity";

export class Rule {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly order: number,
    readonly base: Base
  ) {}

  public static create(name: string, order: number, base: Base) {
    return new Rule(crypto.randomUUID().toString(), name, order, base);
  }

  public static with(id: string, name: string, order: number, base: Base) {
    return new Rule(id, name, order, base);
  }
}

