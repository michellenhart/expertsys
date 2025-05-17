import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Base } from "src/domain/entities/base/base.entity";
import { VariableType } from "src/domain/entities/variable/variable-type.enum";
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
      baseId: entity.base.id,
    }

    const variable = await this.prismaClient.variable.create({
      data,
      include: {
        base: true
      }
    });

    return entity;
  }
  
  public async findAll(): Promise<Variable[]> {
    const variables = await this.prismaClient.variable.findMany({
      include: {
        base: true,
      }
    });

    const variableList = variables.map((v) => {
      return Variable.with(v.id, v.name, v.type as VariableType, v.base)
    })

    return variableList;
  }

  public async findById(id: UUID): Promise<Variable | null> {
    const variable = await this.prismaClient.variable.findUnique({
      where: {
        id
      },
      include: {
        base: true,
      }
    });

    if (!variable)
      return null;

    return Variable.with(variable.id, variable.name, variable.type as VariableType, Base.with(variable.base.id, variable.base.name));
  }
}