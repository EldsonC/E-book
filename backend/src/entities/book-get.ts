import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("categories")
export class categories {
    @PrimaryColumn()
    id: string;

    @Column()
    id_student: string;

    @Column()
    id_book: string;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}