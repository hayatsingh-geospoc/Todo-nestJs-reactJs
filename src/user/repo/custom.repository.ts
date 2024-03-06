// custom.repository.ts
import { Entity, EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';


@EntityRepository()
export class CustomRepository extends Repository<User> {
  async createUser(userData: Partial<User>): Promise<User> {
    const newUser = this.create(userData);
    return this.save(newUser);
  }

  // Add more custom methods as needed
}
