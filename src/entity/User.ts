import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("user")
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column('varchar')
    firstName: string

    @Column('varchar')
    lastName: string

    @Column('varchar')
    username: string

    @Column('varchar')
    password: string
}
