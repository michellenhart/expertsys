export class Rule {
  private constructor(
    readonly name: string,
    readonly order: number
  ) {}

  public static create(name: string, order: number) {
    return new Rule(name, order);
  }
}

