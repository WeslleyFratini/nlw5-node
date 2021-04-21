import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";

interface IMessageCreate {
  admin_id: string;
  text: string;
  user_id: string;
}

class MessagesService {
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messsageRepository = getCustomRepository(MessagesRepository);

    const message = messsageRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messsageRepository.save(message);

    return message;
  }
}

export { MessagesService };
