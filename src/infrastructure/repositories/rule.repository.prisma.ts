import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Rule } from "src/domain/entities/rule/rule.entity";
import { RuleRepository } from "src/domain/repositories/rule.repository";

export class RuleRepositoryPrisma implements RuleRepository {
  private constructor(private readonly prismaClient: PrismaClient){};

  public static create(prismaClient: PrismaClient){
    return new RuleRepositoryPrisma(prismaClient);
  }

  public async save(entity: Rule): Promise<Rule> {
    const data = {
      id: entity.id,
      name: entity.name,
      order: entity.order,
    }

    await this.prismaClient.rule.create({data});

    return entity;
  }
  
  public async findAll(): Promise<Rule[]> {
    const rules = await this.prismaClient.rule.findMany();

    const ruleList = rules.map((r) => {
      return Rule.with(r.id, r.name, r.order, r.base)
    })

    return ruleList;
  }

  public async findById(id: UUID): Promise<Rule> {
    const rule = await this.prismaClient.rule.findById(id);

    return Rule.with(rule.id, rule.name, rule.order, rule.base);
  }
}