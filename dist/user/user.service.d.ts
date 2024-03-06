import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { CustomRepository } from './repo/custom.repository';
export declare class UserService {
    private readonly customRepository;
    constructor(customRepository: CustomRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
}
