import { container } from 'tsyringe';

import { SpecificationsRepository } from '@modules/specification/repositories/in-memory/SpecificationsRepository';
import { ISpecificationsRepository } from '@modules/specification/repositories/ISpecificationsRepository';

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
