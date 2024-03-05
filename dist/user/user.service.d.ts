import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepositry } from './repo/user.repository';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepositry);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
