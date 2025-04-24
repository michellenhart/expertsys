import { PrismaClient } from "@prisma/client";
import { Base } from "src/domain/entities/base/base.entity";
import { DefaultRepository } from "src/domain/repositories/default.repository";

export class BaseRepositoryPrisma implements DefaultRepository<Base> {
  private constructor(private readonly prismaClient: PrismaClient){};

  public static create(prismaClient: PrismaClient){
    return new BaseRepositoryPrisma(prismaClient);
  }

  public async save(entity: Base): Promise<Base> {
    const data = {
      name: entity.name,
      rules: []
    }

    return await this.prismaClient.base.create(data);
  }
  public async findAll(): Promise<Base[]> {
    return this.prismaClient.base.findMany();
  }
}