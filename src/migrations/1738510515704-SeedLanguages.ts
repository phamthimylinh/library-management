import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedLanguages1738510515704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO languages (name) VALUES ('Tiếng Việt')`,
          );
          await queryRunner.query(
            `INSERT INTO languages (name) VALUES ('Tiếng Anh')`,
          );
          await queryRunner.query(
            `INSERT INTO languages (name) VALUES ('Tiếng Nhật')`,
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM languages`);
    }

}
