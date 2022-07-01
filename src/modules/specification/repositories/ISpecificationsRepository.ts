import { Specification } from '@prisma/client';

import { ICreateSpecificationDTO } from './SpecificationsDTO';

export interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): Promise<Specification>;
  findAll(): Promise<Specification[]>;
  findByName(name: string): Promise<Specification | undefined>;
  findById(id: string): Promise<Specification | undefined>;
  delete(id: string): Promise<void>;
}
