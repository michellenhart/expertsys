import { ConditionConnective } from "src/domain/entities/condition/condition-connective.enum";
import { ConditionOperator } from "src/domain/entities/condition/condition-operator.enum";
import { Condition } from "src/domain/entities/condition/condition.entity";
import { ConditionMapper } from "src/domain/mappers/condition-mapper";
import { RuleMapper } from "src/domain/mappers/rule-mapper";
import { ValueMapper } from "src/domain/mappers/value-mapper";
import { VariableMapper } from "src/domain/mappers/variable-mapper";

export class ConditionMapperPrisma implements ConditionMapper {
  private constructor(
    private readonly ruleMapper: RuleMapper, 
    private readonly variableMapper: VariableMapper, 
    private readonly valueMapper: ValueMapper
  ){};
    
  public static create(ruleMapper: RuleMapper, variableMapper: VariableMapper, valueMapper: ValueMapper){
    return new ConditionMapperPrisma(ruleMapper, variableMapper, valueMapper);
  }

  fromDatabase(raw: any): Condition {
    return Condition.with(
      raw.id, 
      this.variableMapper.fromDatabase(raw.variable), 
      raw.operator as ConditionOperator, 
      this.valueMapper.fromDatabase(raw.value),
      raw.connective as ConditionConnective,
      this.ruleMapper.fromDatabase(raw.rule),
    );
  }
}