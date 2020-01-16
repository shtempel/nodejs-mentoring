import { Column, Table, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
    schema: 'new',
    tableName: 'users'
})
export class User extends Model<User> {
    @PrimaryKey
    @Column
    user_id: string;

    @Column
    loginname: string;

    @Column
    password: string;

    @Column
    age: number;
}
