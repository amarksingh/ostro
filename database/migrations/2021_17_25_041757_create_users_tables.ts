import Schema from '@ostro/support/facades/schema';
import Migration from '@ostro/database/migration';

interface BlueprintLike {
    increments(column: string): { primary(): void; [key: string]: unknown };
    string(column: string): { unique(): void; [key: string]: unknown };
    timestamps(): void;
    [key: string]: unknown;
}

/**
 * Class CreateUsersTables.
 */
class CreateUsersTables extends Migration {

    /**
     * Run the migrations.
     *
     * @returns {Promise<void>}
     */
    async up(): Promise<void> {
        await (Schema as any).create('users', function (table: BlueprintLike) {
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
    async down(): Promise<void> {
        await (Schema as any).dropIfExists('users');
    }
}

export default CreateUsersTables;
