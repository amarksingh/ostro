import Schema from '@ostro/support/facades/schema';
import Migration from '@ostro/database/migration';
import type { Blueprint } from '@ostro/contracts/database/blueprint';

/**
 * Class CreateUsersTables.
 */
class CreateUsersTables extends Migration {

    /**
     * Run the migrations.
     *
     * @returns {Promise<void>}
     */
    public override async up(): Promise<void> {
        await (Schema as any).create('users', function (table: Blueprint) {
            table.increments('id').primary();
            table.string('name');
            table.string('email').unique();
            table.string('remember_token').unique();
            table.string('api_token').unique();
            table.string('password');
            table.timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @returns {Promise<void>}
     */
    public override async down(): Promise<void> {
        await (Schema as any).dropIfExists('users');
    }
}

export default CreateUsersTables;
