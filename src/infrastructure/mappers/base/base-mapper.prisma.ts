import { Base } from "src/domain/entities/base/base.entity";
import { BaseMapper } from "src/domain/mappers/base-mapper";

export class BaseMapperPrisma implements BaseMapper {
  fromDatabase(raw: any): Base {
    return Base.with(raw.id, raw.name);
  }
}