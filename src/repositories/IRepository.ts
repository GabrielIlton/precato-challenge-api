export interface IRepository<T> {
  update(filters: Partial<T>, modify: Partial<T>): Promise<void>;

  findOne(filters: Partial<T>): Promise<T | null>;
  
  findAll(filters: Partial<T>, select?: string[]): Promise<T[]>;
}
