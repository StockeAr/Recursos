import { IsNotEmpty, MinLength, IsEmail, isEmail } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcryptjs'
@Entity()
@Unique(['username'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @MinLength(6)
    @IsEmail()
    @IsNotEmpty()
    username: string;

    @Column()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @Column()
    @IsNotEmpty()
    rol: string;

    @Column()
    @CreateDateColumn()
    creado: Date;

    @Column()
    @UpdateDateColumn()
    modificado: Date;

    hashPassword(): void {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }

    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password)
    }

}
