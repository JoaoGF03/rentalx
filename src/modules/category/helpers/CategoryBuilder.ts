import { Category } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

export class CategoryBuilder {
  private category: Category;

  constructor() {
    const id = uuidV4();

    this.category = {
      id,
      name: `***Test Category - ${id}`,
      description: '***Test Description of Test Category',
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };
  }

  public build(): Category {
    return this.category;
  }
}
