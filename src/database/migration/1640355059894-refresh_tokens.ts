import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class refreshTokens1640355059894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.createTable(new Table({
            name:"refresh_tokens",
            columns:[
                {
                    name:"id",
                    type:'int',
                    isPrimary:true
                },
                {
                    name:"expiration",
                    type:"int"
                },
                {
                    name:"userId",
                    type:"int",
                    isNullable: true
                }
            ],
            foreignKeys:[
                {
                    referencedTableName:'users',
                    referencedColumnNames:['id'],
                    columnNames:['userId'],
                    onDelete:"CASCADE",
                    onUpdate:"CASCADE"
                }
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable("refresh_tokens")
    }

}