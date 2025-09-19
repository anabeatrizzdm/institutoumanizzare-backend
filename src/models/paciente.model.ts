import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import type { Consulta } from './consulta.model';
import type { Prontuario } from './prontuario.model';

@Entity()
export class Paciente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  telefone: string;

  @OneToMany('Consulta', 'paciente')
  consultas: Consulta[];

  @OneToMany('Prontuario', 'paciente')
  prontuarios: Prontuario[];
}
