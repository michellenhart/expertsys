import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Variable } from "src/domain/entities/variable/variable.entity";
import { VariableRepository } from "src/domain/repositories/variable.repository";

export class VariableRepositoryPrisma implements VariableRepository {
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
      return Variable.with(v.id, v.name, v.type, v.base)
    })

    return variableList;
  }

  public async findById(id: UUID): Promise<Variable> {
    const variable = this.prismaClient.variable.findById(id);

    return Variable.with(variable.id, variable.name, variable.type, variable.base);
  }
}