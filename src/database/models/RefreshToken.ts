import { BaseEntity, Column, Entity, ManyToOne } from "typeorm";
import User from "./User";

@Entity("refreshToken")
export default class RefreshToken extends BaseEntity{
    @Column()
    id:number;

    @Column()
    expiration:string;

    @ManyToOne(() => User, user=> user.refresh)
    user:User
}