import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Condition } from "src/domain/entities/condition/condition.entity";
import { ConditionRepository } from "src/domain/repositories/condition.repository";

export class ConditionRepositoryPrisma implements ConditionRepository {
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
      return Condition.with(c.id, c.variable, c.operator, c.value, c.connective, c.rule)
    })

    return conditionList;
  }

  public async findById(id: UUID): Promise<Condition> {
    const condition = this.prismaClient.condition.findById(id);

    return Condition.with(condition.id, condition.variable, condition.operator, condition.value, condition.connective, condition.rule);
  }
}