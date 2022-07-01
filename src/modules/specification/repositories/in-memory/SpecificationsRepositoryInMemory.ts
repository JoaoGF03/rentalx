import { Specification } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

import { ISpecificationsRepository } from '../ISpecificationsRepository';
import { ICreateSpecificationDTO } from '../SpecificationsDTO';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  public async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = {
      id: uuidV4(),
      name,
      description,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };

    this.specifications.push(specification);

    return specification;
  }

  public async findAll(): Promise<Specification[]> {
    return this.specifications;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      specification => specification.name === name,
    );

    return specification;
  }

  public async findById(id: string): Promise<Specification> {
    const specification = this.specifications.find(
      specification => specification.id === id,
    );

    return specification;
  }

  public async delete(id: string): Promise<void> {
    const specificationIndex = this.specifications.findIndex(
      specification => specification.id === id,
    );

    this.specifications.splice(specificationIndex, 1);
  }
}
