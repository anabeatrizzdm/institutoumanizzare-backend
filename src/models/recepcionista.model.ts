import { Column, ChildEntity, OneToMany } from 'typeorm';
import { Consulta } from './consulta.model';
import { Usuario } from './usuario.model';

@ChildEntity()
export class Recepcionista extends Usuario {
  @Column()
  turno: string;

  @OneToMany('Consulta', 'recepcionista')
  consultas: Consulta[];
}
