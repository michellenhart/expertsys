import { UUID } from "crypto";

export interface DefaultRepository<T> {
  save(entity: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: UUID): Promise<T>;
}
