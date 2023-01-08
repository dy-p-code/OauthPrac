import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  id: number;

  @Column()
  nickname: string;

  @Column()
  profileImg: string;

  @Column()
  email: string;
}
