import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity() //usar el decorador @Entity
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    correo_electronico : string

    @Column()
    contrasenia: string

    @Column({
        default: true //Agrega valor por defecto true
    })
    activo: boolean
    
    @CreateDateColumn()
    fechaCreado: Date

    @UpdateDateColumn()
    fechaActualizado: Date
}