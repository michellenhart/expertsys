import { Request, Response } from "express";
import { CreateBaseInputDto, CreateBaseUsecase } from "src/usecase/base/create-base.usecase";
import { CreateOutputDto } from "src/usecase/create-output-dto";
import { HttpMethod, Route } from "../route";

export class CreateBaseRoute implements Route {
  private constructor(
    private readonly path: string, 
    private readonly method: HttpMethod,
    private readonly createBaseUseCase: CreateBaseUsecase,
  ) {}

  public static create(createBaseUseCase: CreateBaseUsecase) {
    return new CreateBaseRoute("/base", HttpMethod.POST, createBaseUseCase);
  }

  public getHandler(): (request: Request, response: Response) => Promise<void> {
    return async (request: Request, response: Response) => {
      const { name } = request.body;

      const input: CreateBaseInputDto = {
        name
      };

      const output: CreateOutputDto = await this.createBaseUseCase.execute(input);
    }
  }

  public getPath(): string {
    return this.path;
  }

  public getMethod(): HttpMethod {
    return this.method;
  }
}