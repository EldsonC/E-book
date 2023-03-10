import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class bookGet1678458044678 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "book-get",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "id_student",
                        type: "varchar"
                    },
                    {
                        name: "id_book",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fk_student",
                        columnNames: ["id_student"],
                        referencedTableName: "students",
                        referencedColumnNames: ["id"]
                    },
                    {
                        name: "fk_book",
                        columnNames: ["id_book"],
                        referencedTableName: "books",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("book-get")
    }

}
