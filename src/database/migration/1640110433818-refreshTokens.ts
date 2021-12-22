import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class refreshTokens1640110433818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
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
                    isUnique: true,
                }
            ],
            foreignKeys:[
                {
                    referencedTableName:'users',
                    referencedColumnNames:['id'],
                    columnNames:['userId'],
                }
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('refresh_tokens');
    }

}
