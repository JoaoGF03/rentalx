import { Specification } from '@prisma/client';

import { prisma } from '@shared/prisma';

import { ISpecificationsRepository } from '../ISpecificationsRepository';
import { ICreateSpecificationDTO } from '../SpecificationsDTO';

export class SpecificationsRepository implements ISpecificationsRepository {
  private ormRepository = prisma.specification;

  public async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = await this.ormRepository.create({
      data: {
        name,
        description,
      },
    });

    return specification;
  }

  public async findAll(): Promise<Specification[]> {
    const specifications = await this.ormRepository.findMany();

    return specifications;
  }

  public async findByName(name: string): Promise<Specification> {
    const specification = await this.ormRepository.findFirst({
      where: {
        name,
      },
    });

    return specification;
  }

  public async findById(id: string): Promise<Specification> {
    const specification = await this.ormRepository.findUnique({
      where: {
        id,
      },
    });

    return specification;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete({
      where: {
        id,
      },
    });
  }
}
