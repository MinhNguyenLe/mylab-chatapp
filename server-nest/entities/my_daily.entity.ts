import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('my_daily')
export class MyDaily {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  type: number;

  @Column('varchar', { nullable: true })
  description: string;

  @Column({ type: 'timestamp', nullable: true })
  from: Date;

  @Column({ type: 'timestamp', nullable: true })
  to: Date;
}
