import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/user/repositories/IUsersRepository';
import { IUpdateAvatarDTO } from '@modules/user/repositories/UsersDTO';

@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository,
  ) {}

  public async execute({
    id,
    avatarFileName,
  }: IUpdateAvatarDTO): Promise<void> {
    await this.UsersRepository.pathAvatar({ id, avatarFileName });
  }
}
