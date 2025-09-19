import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  TableInheritance,
  OneToMany,
} from 'typeorm';
import { UserRole } from '../common/enums/user-role.enum';
import type { LogAcesso } from './log-acesso.model';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'tipo_perfil' } })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  tipo_perfil: UserRole;

  @OneToMany('LogAcesso', 'prontuario')
  logs: LogAcesso[];
}
