import { UUID } from "crypto";

export class Value {
  private constructor(readonly id: UUID, readonly value: string) {}

  public static create(value: string) {
    return new Value(crypto.randomUUID(), value);
  }

  public static with(id: UUID, value: string) {
    return new Value(id, value);
  }
}
