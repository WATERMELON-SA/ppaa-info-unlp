import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address' })
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  floor: number;

  @Column()
  apartment: string;

  @Column()
  city: string;

  @Column()
  province: string;

  @Column()
  country: string;
}
