import { UUID } from "crypto";
import { Value } from "src/domain/entities/value/value.entity";
import { ValueRepository } from "src/domain/repositories/value.repository";
import { VariableRepository } from "src/domain/repositories/variable.repository";
import { CreateOutputDto } from "../create-output-dto";
import { Usecase } from "../usecase";

export type CreateValueInputDto = {
  value: string,
  variableId: UUID
}

export class CreateValueUsecase implements Usecase<CreateValueInputDto, CreateOutputDto> {

  private constructor(
    private valueRepository: ValueRepository, 
    private variableRepository: VariableRepository
  ) {};

  public static create(valueRepository: ValueRepository, variableRepository: VariableRepository) {
    return new CreateValueUsecase(valueRepository, variableRepository);
  }

  public async execute({value, variableId}: CreateValueInputDto): Promise<CreateOutputDto> {
    const variable = await this.variableRepository.findById(variableId);
    if (!variable)
      throw new Error("Variável não encontrada!");

    const valueEntity = Value.create(value, variable);

    await this.valueRepository.save(valueEntity);

    const output: CreateOutputDto = {
      id: valueEntity.id
    } 

    return output;
  }
} 