import { EntityTarget, ObjectLiteral } from 'typeorm';

import { IRepository } from './IRepository';

import { AppDatabase } from '../infra';

export class Repository<T extends ObjectLiteral> implements IRepository<T> {
  protected readonly repository: any;

  constructor(private readonly entity: EntityTarget<T>) {
    this.repository = AppDatabase.getRepository(this.entity);
  }

  async update(filters: Partial<T>, modify: Partial<T>): Promise<void> {
    this.repository.update(filters, { ...modify, updatedAt: new Date() });
  }

  async findOne(filters: Partial<T>): Promise<T | null> {
    return this.repository.findOne({ where: filters });
  }

  async findAll(filters: Partial<Record<keyof T, any>>, select?: string[]): Promise<T[]> {
    return this.repository.find({ select, where: filters });
  }
}
