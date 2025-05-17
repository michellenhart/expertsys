import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Condition } from "src/domain/entities/condition/condition.entity";
import { ConditionMapper } from "src/domain/mappers/condition-mapper";
import { ConditionRepository } from "src/domain/repositories/condition.repository";

export class ConditionRepositoryPrisma implements ConditionRepository {
  private constructor(private readonly prismaClient: PrismaClient, private readonly conditionMapper: ConditionMapper){};

  public static create(prismaClient: PrismaClient, conditionMapper: ConditionMapper){
    return new ConditionRepositoryPrisma(prismaClient, conditionMapper);
  }

  public async save(entity: Condition): Promise<Condition> {
    const data = {
      id: entity.id,
      variableId: entity.variable.id,
      operator: entity.operator,
      valueId: entity.value.id,
      connective: entity.connective,
      ruleId: entity.rule.id,
    }

    await this.prismaClient.condition.create({data});

    return entity;
  }
  
  public async findAll(): Promise<Condition[]> {
    const conditions = await this.prismaClient.condition.findMany();

    const conditionList = conditions.map((c) => {
      return this.conditionMapper.fromDatabase(c);
    })

    return conditionList;
  }

  public async findById(id: UUID): Promise<Condition> {
    const condition = await this.prismaClient.condition.findUnique({
      where: {
        id
      },
      include: {
        variable: {
          include: {
            base: true
          }
        },
        value: {
          include: {
            variable: {
              include: {
                base: true
              }
            }
          }
        },
        rule: true,
      }  
    });

    return this.conditionMapper.fromDatabase(condition);
  }
}