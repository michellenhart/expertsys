import { VariableType } from './variable-type.enum';

export class Variable {
  private constructor(
    readonly name: string,
    readonly type: VariableType,
  ) {}

  public static create(name: string, type: VariableType) {
    return new Variable(name, type);
  }
}
