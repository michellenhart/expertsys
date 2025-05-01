import { UUID } from "crypto";
import { ConditionConnective } from "src/domain/entities/condition/condition-connective.enum";
import { ConditionOperator } from "src/domain/entities/condition/condition-operator.enum";
import { Condition } from "src/domain/entities/condition/condition.entity";
import { ConditionRepository } from "src/domain/repositories/condition.repository";
import { RuleRepository } from "src/domain/repositories/rule.repository";
import { ValueRepository } from "src/domain/repositories/value.repository";
import { VariableRepository } from "src/domain/repositories/variable.repository";
import { CreateOutputDto } from "../create-output-dto";
import { Usecase } from "../usecase";

export type CreateConditionInputDto = {
  variableId: UUID,
  operator: string,
  valueId: UUID,
  connective: string,
  ruleId: UUID
}

export class CreateConditionUsecase implements Usecase<CreateConditionInputDto, CreateOutputDto> {

  private constructor(
    private conditionRepository: ConditionRepository, 
    private variableRepository: VariableRepository, 
    private valueRepository: ValueRepository,
    private ruleRepository: RuleRepository
  ) {};

  public static create(
    conditionRepository: ConditionRepository, 
    variableRepository: VariableRepository, 
    valueRepository: ValueRepository, 
    ruleRepository: RuleRepository) {
    return new CreateConditionUsecase(conditionRepository, variableRepository, valueRepository, ruleRepository);
  }

  public async execute({variableId, operator, valueId, connective, ruleId}: CreateConditionInputDto): Promise<CreateOutputDto> {
    const rule = await this.ruleRepository.findById(ruleId);
    if (!rule)
        throw new Error("Regra não encontrada");

    const variable = await this.variableRepository.findById(variableId);
    if (!variable)
      throw new Error("Variável não encontrada!");

    const value = await this.valueRepository.findById(valueId);
    if (!value)
      throw new Error("Valor não encontrado!");

    const condition = Condition.create(variable, operator as ConditionOperator, value, connective as ConditionConnective, rule);

    await this.conditionRepository.save(condition);

    const output: CreateOutputDto = {
      id: condition.id
    } 

    return output;
  }
} 