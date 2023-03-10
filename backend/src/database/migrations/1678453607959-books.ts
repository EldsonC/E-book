import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class books1678453607959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "cover",
                        type: "varchar",
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "author",
                        type: "varchar"
                    },
                    {
                        name: "category",
                        type: "varchar"
                    },
                    {
                        name: "year",
                        type: "numeric"
                    },
                    {
                        name: "pages",
                        type: "numeric"
                    },
                    {
                        name: "created_At",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                // foreignKeys: [
                //     {
                //         name: "fk_categories",
                //         columnNames: ["category"],
                //         referencedTableName: "categories",
                //         referencedColumnNames: ["name"]
                //     }
                // ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("books")
    }

}
