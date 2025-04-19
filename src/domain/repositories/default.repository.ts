export interface DefaultRepository<T> {
  save(T): Promise<T>;
  findAll(): Promise<T[]>;
}
