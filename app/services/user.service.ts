import { User } from "../types";
import { userRepository } from "../repositories";

async function createUser(user: User) {
    return await userRepository.create(user);
}

export default {
  createUser,
}