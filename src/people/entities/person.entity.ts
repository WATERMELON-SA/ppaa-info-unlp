import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'people' })
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthday: string;
}
