import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("books")
export class Books {
    @PrimaryColumn()
    id: string;

    @Column()
    cover: string;

    @Column()
    name: string;

    @Column() 
    author: string;

    @Column()
    category: string;

    @Column() 
    year: number;

    @Column()
    pages: number;

    @CreateDateColumn()
    created_At: Date;


    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}