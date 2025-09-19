import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import type { Paciente } from './paciente.model';
import type { Psicologo } from './psicologo.model';
import type { Prontuario } from './prontuario.model';
import { Recepcionista } from './recepcionista.model';

@Entity()
export class Consulta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Paciente', 'consultas')
  @JoinColumn({ name: 'id_paciente' })
  paciente: Paciente;

  @ManyToOne('Psicologo', 'consultas')
  @JoinColumn({ name: 'id_psicologo' })
  psicologo: Psicologo;

  @ManyToOne('Recepcionista', 'consultas')
  @JoinColumn({ name: 'id_recepcionista' })
  recepcionista: Recepcionista;

  @Column({ type: 'timestamp' })
  data_consulta: Date;

  @OneToOne('Prontuario', 'consulta')
  prontuario: Prontuario;
}
