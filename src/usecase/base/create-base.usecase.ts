import { Base } from "src/domain/entities/base/base.entity";
import { BaseRepository } from "src/domain/repositories/base.repository";
import { CreateOutputDto } from "../create-output-dto";
import { Usecase } from "../usecase";

export type CreateBaseInputDto = {
  name: string,
}

export class CreateBaseUsecase implements Usecase<CreateBaseInputDto, CreateOutputDto> {

  private constructor(private baseRepository: BaseRepository) {};

  public static create(baseRepository: BaseRepository) {
    return new CreateBaseUsecase(baseRepository);
  }

  public async execute({name}: CreateBaseInputDto): Promise<CreateOutputDto> {
    const base = Base.create(name, []);

    await this.baseRepository.save(base);

    const output: CreateOutputDto = {
      id: base.id
    } 

    return output;
  }
} 