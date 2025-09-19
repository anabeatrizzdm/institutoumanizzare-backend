import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1758304536482 implements MigrationInterface {
    name = 'InitialMigration1758304536482'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "tipo_perfil" "public"."usuario_tipo_perfil_enum" NOT NULL, "especialidade" character varying, "telefone" character varying, CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f1a00c7351a6c7e393844e7454" ON "usuario" ("tipo_perfil") `);
        await queryRunner.query(`CREATE TABLE "consulta" ("id" SERIAL NOT NULL, "data_consulta" TIMESTAMP NOT NULL, "id_paciente" integer, "id_psicologo" integer, CONSTRAINT "PK_248230d7f1e2536f83b4d07c955" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "prontuario" ("id" SERIAL NOT NULL, "descricao" text NOT NULL, "data_registro" TIMESTAMP NOT NULL DEFAULT now(), "id_paciente" integer, "id_psicologo" integer, "id_consulta" integer, CONSTRAINT "REL_3f658c6c0b83488f7669027469" UNIQUE ("id_consulta"), CONSTRAINT "PK_26a7deec6e29f10efc3087ecbec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "log_acesso" ("id" SERIAL NOT NULL, "tipo_acesso" "public"."log_acesso_tipo_acesso_enum" NOT NULL, "data_hora" TIMESTAMP NOT NULL DEFAULT now(), "id_prontuario" integer, "id_usuario" integer, CONSTRAINT "PK_9a44276e9f50556b33331372d19" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paciente" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, CONSTRAINT "UQ_7305cdc6186085e5abaefe643b4" UNIQUE ("email"), CONSTRAINT "PK_cbcb7985432e4b49d32c5243867" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "consulta" ADD CONSTRAINT "FK_0e9abbf9985b0379292f9220221" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "consulta" ADD CONSTRAINT "FK_b564c5aa963c3db66f8f89b2633" FOREIGN KEY ("id_psicologo") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuario" ADD CONSTRAINT "FK_f218a65c0fac162bde4f39c1bcc" FOREIGN KEY ("id_paciente") REFERENCES "paciente"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuario" ADD CONSTRAINT "FK_0bafc7691e6606299ae3f026fb9" FOREIGN KEY ("id_psicologo") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "prontuario" ADD CONSTRAINT "FK_3f658c6c0b83488f76690274690" FOREIGN KEY ("id_consulta") REFERENCES "consulta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "log_acesso" ADD CONSTRAINT "FK_b8aadbd8bee087bd5744807eb6c" FOREIGN KEY ("id_prontuario") REFERENCES "prontuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "log_acesso" ADD CONSTRAINT "FK_566fa25aaf0b0c26fb9ba90ba53" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "log_acesso" DROP CONSTRAINT "FK_566fa25aaf0b0c26fb9ba90ba53"`);
        await queryRunner.query(`ALTER TABLE "log_acesso" DROP CONSTRAINT "FK_b8aadbd8bee087bd5744807eb6c"`);
        await queryRunner.query(`ALTER TABLE "prontuario" DROP CONSTRAINT "FK_3f658c6c0b83488f76690274690"`);
        await queryRunner.query(`ALTER TABLE "prontuario" DROP CONSTRAINT "FK_0bafc7691e6606299ae3f026fb9"`);
        await queryRunner.query(`ALTER TABLE "prontuario" DROP CONSTRAINT "FK_f218a65c0fac162bde4f39c1bcc"`);
        await queryRunner.query(`ALTER TABLE "consulta" DROP CONSTRAINT "FK_b564c5aa963c3db66f8f89b2633"`);
        await queryRunner.query(`ALTER TABLE "consulta" DROP CONSTRAINT "FK_0e9abbf9985b0379292f9220221"`);
        await queryRunner.query(`DROP TABLE "paciente"`);
        await queryRunner.query(`DROP TABLE "log_acesso"`);
        await queryRunner.query(`DROP TABLE "prontuario"`);
        await queryRunner.query(`DROP TABLE "consulta"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f1a00c7351a6c7e393844e7454"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
