import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm'
@Entity()
export class Film extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', type: 'varchar', length: 100 })
    name: string;

    @Column({ name: 'director', type: 'varchar', length: 50 })
    director: string;

    @Column({ name: 'rating', type: 'int'})
    rating?: number;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;



}
