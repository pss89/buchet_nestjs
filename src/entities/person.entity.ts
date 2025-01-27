import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'person' })
export class PersonEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', length: 255, name: 'name' })
  name: string;

  @Column({ type: 'int', name: 'age' })
  age: number;
}
