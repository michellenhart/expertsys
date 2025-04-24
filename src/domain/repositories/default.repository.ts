export interface DefaultRepository<T> {
  save(entity: T): Promise<T>;
  findAll(): Promise<T[]>;
}
