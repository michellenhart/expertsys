import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Value } from "src/domain/entities/value/value.entity";
import { VariableMapper } from "src/domain/mappers/variable-mapper";
import { ValueRepository } from "src/domain/repositories/value.repository";

export class ValueRepositoryPrisma implements ValueRepository {
  private constructor(private readonly prismaClient: PrismaClient, private readonly variableMapper: VariableMapper){};

  public static create(prismaClient: PrismaClient, variableMapper: VariableMapper){
    return new ValueRepositoryPrisma(prismaClient, variableMapper);
  }

  public async save(entity: Value): Promise<Value> {
    const data = {
      id: entity.id,
      value: entity.value,
      variableId: entity.variable.id,
    }

    await this.prismaClient.value.create({
      data,
      include: {
        variable: true,
      }
    });

    return entity;
  }
  
  public async findAll(): Promise<Value[]> {
    const values = await this.prismaClient.value.findMany({
      include: {
        variable: {
          include: {
            base: true,
          }
        },
      }
    });

    const valueList = values.map((v) => {
      return Value.with(v.id, v.value, this.variableMapper.fromDatabase(v.variable))
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

    return Value.with(value.id, value.value, this.variableMapper.fromDatabase(value.variable));
  }
}