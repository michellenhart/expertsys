
export class Base {
  private constructor(
    readonly id: string, 
    readonly name: string
  ) {}

  public static create(name: string) {
    return new Base(crypto.randomUUID().toString(), name);
  }

  public static with(id: string, name: string) {
    return new Base(id, name);
  }
}
