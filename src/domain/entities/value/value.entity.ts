export class Value {
  private constructor(readonly value: string) {}

  public static create(value: string) {
    return new Value(value);
  }
}
