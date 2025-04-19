export class Base {
  private constructor(readonly name: string) {}

  public static create(name: string) {
    return new Base(name);
  }
}
