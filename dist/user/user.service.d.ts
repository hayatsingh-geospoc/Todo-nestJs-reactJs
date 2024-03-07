import { User } from './entities/user.entity';
import { UserRepository } from './repo/user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(userData: Partial<User>): Promise<User>;
}
