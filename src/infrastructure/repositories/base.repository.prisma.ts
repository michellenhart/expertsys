import { PrismaClient } from "@prisma/client";
import { UUID } from "crypto";
import { Base } from "src/domain/entities/base/base.entity";
import { BaseMapper } from "src/domain/mappers/base-mapper";
import { BaseRepository } from "src/domain/repositories/base.repository";

export class BaseRepositoryPrisma implements BaseRepository {
  private constructor(private readonly prismaClient: PrismaClient, private readonly baseMapper: BaseMapper){};

  public static create(prismaClient: PrismaClient, baseMapper: BaseMapper){
    return new BaseRepositoryPrisma(prismaClient, baseMapper);
  }

  public async save(entity: Base): Promise<Base> {
    const data = {
      id: entity.id,
      name: entity.name
    }

    await this.prismaClient.base.create({data});

    return entity;
  }
  
  public async findAll(): Promise<Base[]> {
    const bases = await this.prismaClient.base.findMany();

    const baseList = bases.map((b) => {
      return this.baseMapper.fromDatabase(b)
    })

    return baseList;
  }

  public async findById(id: UUID): Promise<Base> {
    const base = await this.prismaClient.base.findUnique({
      where: {
        id
      }
    });

    return this.baseMapper.fromDatabase(base);
  }
}