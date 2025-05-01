import { UUID } from "crypto";
import { Base } from "src/domain/entities/base/base.entity";
import { BaseRepository } from "src/domain/repositories/base.repository";
import { CreateOutputDto } from "../create-output-dto";
import { CreateBaseInputDto, CreateBaseUsecase } from "./create-base.usecase";

test("Deve criar uma base", async function () {
  const baseRepository: BaseRepository = {
    save: async function (entity: Base): Promise<Base> {
      const base = Base.create(entity.name, entity.rules);
      return base;
    },
    findAll: async function (): Promise<Base[]> {
      return [];
    },
    findById: async function (id: UUID): Promise<Base | null> {
      return null;
    }
  }

  const createBaseUseCase = CreateBaseUsecase.create(baseRepository);

  const input: CreateBaseInputDto = {
    name: "teste",
  }

  const output: CreateOutputDto = await createBaseUseCase.execute(input);

  expect(output.id).toBeDefined();
})