import { v4 as uuid } from 'uuid';

export class Category {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }: Category) {
    this.id = uuid();
    this.createdAt = new Date();

    this.name = name;
    this.description = description;
  }
}
