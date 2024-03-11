// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   firstName: string;

//   @Column()
//   lastName: string;

//   @Column()
//   email: string;

//   @Column()
//   password: string;

//   @Column()
//   role:string
// }

// user.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  // Add more columns as needed
}
