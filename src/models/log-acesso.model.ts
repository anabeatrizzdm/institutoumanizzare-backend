import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import type { Prontuario } from './prontuario.model';
import { AccessType } from '../common/enums/access-type.enum';
import { Usuario } from './usuario.model';

@Entity()
export class LogAcesso {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne('Prontuario', 'logs')
  @JoinColumn({ name: 'id_prontuario' })
  prontuario: Prontuario;

  @Column({
    type: 'enum',
    enum: AccessType,
  })
  tipo_acesso: AccessType;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_hora: Date;

  @ManyToOne('Usuario', 'logs')
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
