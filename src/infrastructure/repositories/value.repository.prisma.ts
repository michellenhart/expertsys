import { PrismaClient } from "@prisma/client";
import { Value } from "src/domain/entities/value/value.entity";
import { DefaultRepository } from "src/domain/repositories/default.repository";

export class ValueRepositoryPrisma implements DefaultRepository<Value> {
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
      return Value.with(v.id, v.value)
    })

    return valueList;
  }
}