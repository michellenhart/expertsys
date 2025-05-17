import { VariableType } from "src/domain/entities/variable/variable-type.enum";
import { Variable } from "src/domain/entities/variable/variable.entity";
import { BaseMapper } from "src/domain/mappers/base-mapper";
import { VariableMapper } from "src/domain/mappers/variable-mapper";

export class VariableMapperPrisma implements VariableMapper {
  private constructor(private readonly baseMapper: BaseMapper){};
  
    public static create(baseMapper: BaseMapper){
      return new VariableMapperPrisma(baseMapper);
    }
  
  fromDatabase(raw: any): Variable {
    return Variable.with(raw.id, raw.name, raw.type as VariableType, this.baseMapper.fromDatabase(raw.base));
  }
}