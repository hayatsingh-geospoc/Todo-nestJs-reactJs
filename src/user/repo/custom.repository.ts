// custom.repository.ts
import { Entity, Repository } from 'typeorm';
import { User } from '../entities/user.entity';


@Entity()
export class CustomRepository extends Repository<User> {
  async createUser(userData: Partial<User>): Promise<User> {
    const newUser = this.create(userData);
    return this.save(newUser);
  }

  // Add more custom methods as needed
}
