import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Condition } from "src/domain/entities/condition/condition.entity";
import { DefaultRepository } from "src/domain/repositories/default.repository";

export class ConditionRepositoryPrisma implements DefaultRepository<Condition> {
  private constructor(private readonly prismaClient: PrismaClient){};

  public static create(prismaClient: PrismaClient){
    return new ConditionRepositoryPrisma(prismaClient);
  }

  public async save(entity: Condition): Promise<Condition> {
    const data = {
      id: entity.id,
      variable: entity.variable,
      operator: entity.operator,
      value: entity.value,
      connective: entity.connective
    }

    return await this.prismaClient.condition.create(data);
  }
  
  public async findAll(): Promise<Condition[]> {
    const conditions = this.prismaClient.condition.findMany();

    const conditionList = conditions.map((c) => {
      return Condition.with(c.id, c.variable, c.operator, c.value, c.connective)
    })

    return conditionList;
  }

  public async findById(id: UUID): Promise<Condition> {
    const condition = this.prismaClient.base.findById(id);

    if (!condition)
      throw new Error("Condição não encontrada!");

    return Condition.with(condition.id, condition.variable, condition.operator, condition.value, condition.connective);
  }
}