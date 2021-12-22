import {Entity,BaseEntity,PrimaryGeneratedColumn,Column, OneToMany} from 'typeorm'
import RefreshToken from './RefreshToken';

@Entity("users")
export default class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    password:string;

    @OneToMany(() => RefreshToken, refresh => refresh.user)
    refresh:RefreshToken[]
}