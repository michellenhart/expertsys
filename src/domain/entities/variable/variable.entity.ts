import { Base } from '../base/base.entity';
import { VariableType } from './variable-type.enum';

export class Variable {
  private constructor(
    readonly id: string,
    readonly name: string,
    readonly type: VariableType,
    readonly base: Base,
  ) {}

  public static create(name: string, type: VariableType, base: Base) {
    return new Variable(crypto.randomUUID().toString(), name, type, base);
  }

  public static with(id: string, name: string, type: VariableType, base: Base) {
    return new Variable(id, name, type, base);
  }
}
