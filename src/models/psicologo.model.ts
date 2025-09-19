import { Column, ChildEntity, OneToMany } from 'typeorm';
import { Consulta } from './consulta.model';
import { Usuario } from './usuario.model';

@ChildEntity()
export class Psicologo extends Usuario {
  @Column()
  especialidade: string;

  @Column()
  telefone: string;

  @OneToMany(() => Consulta, (consulta) => consulta.psicologo)
  consultas: Consulta[];
}
