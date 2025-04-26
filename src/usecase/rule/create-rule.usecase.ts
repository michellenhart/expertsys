import { UUID } from "crypto";
import { Rule } from "src/domain/entities/rule/rule.entity";
import { BaseRepository } from "src/domain/repositories/base.repository";
import { RuleRepository } from "src/domain/repositories/rule.repository";
import { CreateOutputDto } from "../create-output-dto";
import { Usecase } from "../usecase";

export type CreateRuleInputDto = {
  name: string,
  order: number,
  baseId: UUID
}

export class CreateRuleUsecase implements Usecase<CreateRuleInputDto, CreateOutputDto> {

  private constructor(
    private ruleRepository: RuleRepository,
    private baseRepository: BaseRepository 
  ) {};

  public static create(ruleRepository: RuleRepository, baseRepository: BaseRepository) {
    return new CreateRuleUsecase(ruleRepository, baseRepository);
  }

  public async execute({name, order, baseId}: CreateRuleInputDto): Promise<CreateOutputDto> {
    const base = await this.baseRepository.findById(baseId);
    if (!base)
      throw new Error("Base não encontrada!");

    const rule = Rule.create(name, order, base);

    await this.ruleRepository.save(rule);

    const output: CreateOutputDto = {
      id: rule.id
    } 

    return output;
  }
} 