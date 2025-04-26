import { UUID } from 'crypto';
import { VariableType } from './variable-type.enum';

export class Variable {
  private constructor(
    readonly id: UUID,
    readonly name: string,
    readonly type: VariableType,
  ) {}

  public static create(name: string, type: VariableType) {
    return new Variable(crypto.randomUUID(), name, type);
  }

  public static with(id: UUID, name: string, type: VariableType) {
    return new Variable(id, name, type);
  }
}
