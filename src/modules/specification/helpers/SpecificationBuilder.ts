import { Specification } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

export class SpecificationBuilder {
  private specification: Specification;

  constructor() {
    const id = uuidV4();

    this.specification = {
      id,
      name: `***Test Specification - ${id}`,
      description: '***Test Description of Test Specification',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };
  }

  public build(): Specification {
    return this.specification;
  }
}
