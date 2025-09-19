import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRecepcionista1758306567088 implements MigrationInterface {
    name = 'AddRecepcionista1758306567088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario" ADD "turno" character varying`);
        await queryRunner.query(`ALTER TABLE "consulta" ADD "id_recepcionista" integer`);
        await queryRunner.query(`ALTER TABLE "consulta" ADD CONSTRAINT "FK_a2ad9dc2507871ce749f7c00f98" FOREIGN KEY ("id_recepcionista") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "consulta" DROP CONSTRAINT "FK_a2ad9dc2507871ce749f7c00f98"`);
        await queryRunner.query(`ALTER TABLE "consulta" DROP COLUMN "id_recepcionista"`);
        await queryRunner.query(`ALTER TABLE "usuario" DROP COLUMN "turno"`);
    }

}
