import { PrismaClient } from "@prisma/client";
import { Variable } from "src/domain/entities/variable/variable.entity";
import { DefaultRepository } from "src/domain/repositories/default.repository";

export class VariableRepositoryPrisma implements DefaultRepository<Variable> {
  private constructor(private readonly prismaClient: PrismaClient){};

  public static create(prismaClient: PrismaClient){
    return new VariableRepositoryPrisma(prismaClient);
  }

  public async save(entity: Variable): Promise<Variable> {
    const data = {
      id: entity.id,
      name: entity.name,
      type: entity.type,
    }

    return await this.prismaClient.variable.create(data);
  }
  
  public async findAll(): Promise<Variable[]> {
    const variables = this.prismaClient.variable.findMany();

    const variableList = variables.map((v) => {
      return Variable.with(v.id, v.name, v.type)
    })

    return variableList;
  }
}