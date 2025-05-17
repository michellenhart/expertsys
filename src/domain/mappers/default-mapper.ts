export interface DefaultMapper<T> {
  fromDatabase(raw: any): T;
}