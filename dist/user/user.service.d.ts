import { User } from './entities/user.entity';
import { CustomRepository } from './repo/custom.repository';
export declare class UserService {
    private readonly customRepository;
    constructor(customRepository: CustomRepository);
    createUser(userData: Partial<User>): Promise<User>;
}
