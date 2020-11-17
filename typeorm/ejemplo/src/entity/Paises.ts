import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Autores} from './Autores';
@Entity()
export class Paises{
    @PrimaryGeneratedColumn()
    ID:number;

    @Column()
    nombre:string;

    @OneToMany(type =>Autores, autores=>autores.paises)
    autores:Autores[];
}