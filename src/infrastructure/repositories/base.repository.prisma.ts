import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Base } from "src/domain/entities/base/base.entity";
import { DefaultRepository } from "src/domain/repositories/default.repository";

export class BaseRepositoryPrisma implements DefaultRepository<Base> {
  private constructor(private readonly prismaClient: PrismaClient){};

  public static create(prismaClient: PrismaClient){
    return new BaseRepositoryPrisma(prismaClient);
  }

  public async save(entity: Base): Promise<Base> {
    const data = {
      id: entity.id,
      name: entity.name,
      rules: entity.rules,
    }

    return await this.prismaClient.base.create(data);
  }
  
  public async findAll(): Promise<Base[]> {
    const bases = this.prismaClient.base.findMany();

    const baseList = bases.map((b) => {
      return Base.with(b.id, b.name, b.rules)
    })

    return baseList;
  }

  public async findById(id: UUID): Promise<Base> {
    const base = this.prismaClient.base.findById(id);

    if (!base)
      throw new Error("Base não encontrada!");

    return Base.with(base.id, base.name, base.rules);
  }
}