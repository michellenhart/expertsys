import { UUID } from "crypto";

export class Rule {
  private constructor(
    readonly id: UUID,
    readonly name: string,
    readonly order: number
  ) {}

  public static create(name: string, order: number) {
    return new Rule(crypto.randomUUID(), name, order);
  }

  public static with(id: UUID, name: string, order: number) {
    return new Rule(id, name, order);
  }
}

