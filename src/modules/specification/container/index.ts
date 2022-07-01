import { container } from 'tsyringe';

import { SpecificationsRepository } from '@modules/specification/repositories/implementations/SpecificationsRepository';
import { ISpecificationsRepository } from '@modules/specification/repositories/ISpecificationsRepository';

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
