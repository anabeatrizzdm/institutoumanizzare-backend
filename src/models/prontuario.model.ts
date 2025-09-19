import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import type { Paciente } from './paciente.model';
import type { Psicologo } from './psicologo.model';
import type { Consulta } from './consulta.model';
import type { LogAcesso } from './log-acesso.model';

@Entity()
export class Prontuario {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Paciente', 'prontuarios')
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente;

  @ManyToOne('Psicologo', 'prontuarios')
  @JoinColumn({ name: 'id_psicologo' })
  psicologo: Psicologo;

  @OneToOne('Consulta', 'prontuario')
  @JoinColumn({ name: 'id_consulta' })
  consulta: Consulta;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_registro: Date;

  @OneToMany('LogAcesso', 'prontuario')
  logs: LogAcesso[];
}
