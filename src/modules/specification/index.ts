import { v4 as uuid } from 'uuid';

export class Specification {
  id?: string;
  name: string;
  description: string;
  createdAt?: Date;

  constructor({ name, description }: Specification) {
    this.id = uuid();
    this.createdAt = new Date();

    this.name = name;
    this.description = description;
  }
}
