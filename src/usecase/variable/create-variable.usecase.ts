import { UUID } from "crypto";
import { VariableType } from "src/domain/entities/variable/variable-type.enum";
import { Variable } from "src/domain/entities/variable/variable.entity";
import { BaseRepository } from "src/domain/repositories/base.repository";
import { VariableRepository } from "src/domain/repositories/variable.repository";
import { CreateOutputDto } from "../create-output-dto";
import { Usecase } from "../usecase";

export type CreateVariableInputDto = {
  name: string,
  type: string,
  baseId: UUID
}

export class CreateVariableUsecase implements Usecase<CreateVariableInputDto, CreateOutputDto> {

  private constructor(
    private variableRepository: VariableRepository, 
    private baseRepository: BaseRepository, 
  ) {};

  public static create(variableRepository: VariableRepository, baseRepository: BaseRepository) {
    return new CreateVariableUsecase(variableRepository, baseRepository);
  }

  public async execute({name, type, baseId}: CreateVariableInputDto): Promise<CreateOutputDto> {
    const base = await this.baseRepository.findById(baseId);
    if (!base)
      throw new Error("Base não encontrada!");

    const variable = Variable.create(name, type as VariableType, base);

    await this.variableRepository.save(variable);

    const output: CreateOutputDto = {
      id: variable.id
    } 

    return output;
  }
} 