import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class CustomRepository extends Repository<User> {
    findActiveUsers(): Promise<User[]>;
}
