import { Bookshelf } from '../../core/Database';
import { Tables } from '../../constants/Tables';

/**
 * User Model
 *
 * @export
 * @class User
 * @extends {Bookshelf.Model<User>}
 */
export class User extends Bookshelf.Model<User> {

    public static async fetchById(id: number): Promise<User> {
        return await User.where<User>({ id: id }).fetch();
    }

    public static async fetchByUserId(userId: string): Promise<User> {
        return await User.where<User>({ auth_0_user_id: userId }).fetch();
    }

    public get tableName(): string { return Tables.Users; }
    public get hasTimestamps(): boolean { return true; }

    public get Id(): number { return this.get('id'); }
    public set Id(value: number) { this.set({ id: value }); }

    public get FirstName(): string { return this.get('firstName'); }
    public set FirstName(value: string) { this.set({ id: value }); }

    public get LastName(): string { return this.get('lastName'); }
    public set LastName(value: string) { this.set({ id: value }); }

    public get Email(): string { return this.get('email'); }
    public set Email(value: string) { this.set({ id: value }); }

    public get UpdatedAt(): Date { return this.get('updatedAt'); }
    public set UpdatedAt(value: Date) { this.set({ id: value }); }

    public get CreatedAt(): Date { return this.get('createdAt'); }
    public set CreatedAt(value: Date) { this.set({ id: value }); }

    public fullName(): string {
        return this.FirstName + ' ' + this.LastName;
    }

}

/**
 * @swagger
 * definitions:
 *   NewUser:
 *     type: object
 *     properties:
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       picture:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: "integer"
 *         format: "int64"
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       picture:
 *         type: string
 *       updatedAt:
 *         type: string
 *         format: date-time
 *       createdAt:
 *         type: string
 *         format: date-time
 */
