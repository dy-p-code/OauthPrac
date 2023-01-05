import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  profile_nickname: string;

  @Column()
  profile_image: string;

  @Column()
  account_email: string;
}
