import { UUID } from "crypto";
import { Base } from "../base/base.entity";

export class Rule {
  private constructor(
    readonly id: UUID,
    readonly name: string,
    readonly order: number,
    readonly base: Base
  ) {}

  public static create(name: string, order: number, base: Base) {
    return new Rule(crypto.randomUUID(), name, order, base);
  }

  public static with(id: UUID, name: string, order: number, base: Base) {
    return new Rule(id, name, order, base);
  }
}

