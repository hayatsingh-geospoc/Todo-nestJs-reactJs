import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'custom_table_two' })
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  

  @Column()
  completed: boolean;
}
