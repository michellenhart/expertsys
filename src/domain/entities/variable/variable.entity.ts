import { UUID } from 'crypto';
import { Base } from '../base/base.entity';
import { VariableType } from './variable-type.enum';

export class Variable {
  private constructor(
    readonly id: UUID,
    readonly name: string,
    readonly type: VariableType,
    readonly base: Base,
  ) {}

  public static create(name: string, type: VariableType, base: Base) {
    return new Variable(crypto.randomUUID(), name, type, base);
  }

  public static with(id: UUID, name: string, type: VariableType, base: Base) {
    return new Variable(id, name, type, base);
  }
}
