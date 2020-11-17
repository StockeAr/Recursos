import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Paises} from './Paises';
@Entity()
export class Autores{
    @PrimaryGeneratedColumn()
    ID:number;

    @Column()
    Apellido:string;

    @Column()
    Nombre:string;

    @Column({type:"date"})
    FechaNacimiento:Date;

    @Column()
    Nacionalidad:number;

    @ManyToOne(type =>Paises,paises=>paises.autores)
    paises:Paises;
}