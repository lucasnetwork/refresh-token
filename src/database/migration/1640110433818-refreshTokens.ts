import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class refreshTokens1640110433818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name:"refresh_tokens",
            columns:[
                {
                    name:"id",
                    type:'number',
                    isPrimary:true
                },
                {
                    name:"expiration",
                    type:"varchar"
                },
                {
                    name:"userId",
                    type:"number"
                }
            ],
            foreignKeys:[
                {
                    referencedTableName:'users',
                    columnNames:['userId'],
                    referencedColumnNames:["id"],
                    onDelete:"ON DELETE"
                }
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
