import request from 'supertest';

import { app } from '@shared/infra/app';
import { prisma } from '@shared/infra/prisma';

import { CategoryBuilder } from '@modules/category/helpers/CategoryBuilder';
import { CategoriesRepository } from '@modules/category/repositories/implementations/CategoriesRepository';
import { authenticateUser } from '@modules/user/helpers/AuthenticateUser';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let token: string;

describe('CreateCategoryController', () => {
  beforeAll(async () => {
    token = await authenticateUser();
  });

  afterAll(async () => {
    await prisma.category.deleteMany({
      where: {
        name: {
          contains: '***Test',
        },
      },
    });

    await prisma.user.deleteMany({
      where: {
        name: {
          contains: '***Test',
        },
      },
    });
  });

  it('should be able to create a new category', async () => {
    const category = new CategoryBuilder().build();

    const response = await request(app)
      .post(`/categories`)
      .send(category)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(201);
  });

  it('should not be able to create a new category with same name', async () => {
    const category = new CategoryBuilder().build();

    const createCategory = new CreateCategoryUseCase(
      new CategoriesRepository(),
    );

    await createCategory.execute(category);

    const response = await request(app)
      .post(`/categories`)
      .send(category)
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(400);
  });
});
