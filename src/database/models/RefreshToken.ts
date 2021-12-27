import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity({name:"refresh_tokens"})
export default class RefreshToken extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    expiration:number;

    @ManyToOne(() => User, user=> user.refresh,{onDelete:"CASCADE"})
    user:User
}