import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    const usersExists = await usersRepository.findOne({
      email,
    });

    if (usersExists) {
      return usersExists;
    }

    const user = usersRepository.create({
      email,
    });
    await usersRepository.save(user);
    return user;
  }
}

export { UserService };
