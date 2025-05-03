import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Value } from "src/domain/entities/value/value.entity";
import { ValueRepository } from "src/domain/repositories/value.repository";

export class ValueRepositoryPrisma implements ValueRepository {
  private constructor(private readonly prismaClient: PrismaClient){};

  public static create(prismaClient: PrismaClient){
    return new ValueRepositoryPrisma(prismaClient);
  }

  public async save(entity: Value): Promise<Value> {
    const data = {
      id: entity.id,
      value: entity.value
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

  public async findById(id: UUID): Promise<Value> {
    const value = this.prismaClient.value.findById(id);

    return Value.with(value.id, value.value, value.variable);
  }
}