import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Value } from "src/domain/entities/value/value.entity";
import { VariableType } from "src/domain/entities/variable/variable-type.enum";
import { Variable } from "src/domain/entities/variable/variable.entity";
import { BaseMapper } from "src/domain/mappers/base-mapper";
import { ValueRepository } from "src/domain/repositories/value.repository";

export class ValueRepositoryPrisma implements ValueRepository {
  private constructor(private readonly prismaClient: PrismaClient, private readonly baseMapper: BaseMapper){};

  public static create(prismaClient: PrismaClient, baseMapper: BaseMapper){
    return new ValueRepositoryPrisma(prismaClient, baseMapper);
  }

  public async save(entity: Value): Promise<Value> {
    const data = {
      id: entity.id,
      value: entity.value,
    }

    return await this.prismaClient.value.create(data);
  }
  
  public async findAll(): Promise<Value[]> {
    const values = this.prismaClient.value.findMany();

    const valueList = values.map((v) => {
      return Value.with(v.id, v.value, v.variable)
    })

    return valueList;
  }

  public async findById(id: UUID): Promise<Value | null> {
    const value = await this.prismaClient.value.findUnique({
      where: {
        id
      },
      include: {
        variable: {
          include: {
            base: true
          }
        }  
      }
    });

    if (!value)
      return null;

    return Value.with(value.id, value.value, Variable.with(value.variable.id, value.variable.name, value.variable.type as VariableType, this.baseMapper.fromDatabase(value.variable.base)));
  }
}