import Authenticatable from '@ostro/foundation/auth/user';

/**
 * Class User.
 */
class User extends Authenticatable {

    $fillable: string[] = [
        'name',
        'email',
        'password',
    ];

    $hidden: string[] = [
        'password',
        'remember_token',
    ];

}

export default User;