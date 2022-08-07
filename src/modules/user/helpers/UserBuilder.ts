import { User } from '@prisma/client';
import { v4 as uuidV4 } from 'uuid';

export class UserBuilder {
  private user: User;

  constructor() {
    const id = uuidV4();

    this.user = {
      id,
      name: `***Test User - ${id}`,
      driverLicense: '***Test Driver License',
      email: `${id}@email.com`,
      password: '***Test Password',
      avatar: null,
      isAdmin: false,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
    };
  }

  public build(): User {
    return this.user;
  }
}
