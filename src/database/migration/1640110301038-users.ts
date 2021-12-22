import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class users1640110301038 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true
                },
                {
                    name:"email",
                    type:"varchar",
                    isUnique:true
                },
                {
                    name:"password",
                    type:'varchar',
                    
                },
                
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.dropTable("users")
    }

}
