import { Column, Table, Model, PrimaryKey, AllowNull, Unique, DataType } from 'sequelize-typescript';

@Table({
    schema: 'new',
    tableName: 'users'
})
export class User extends Model<User> {
    @PrimaryKey
    @Unique(true)
    @AllowNull(false)
    @Column
    user_id: string;

    @AllowNull(false)
    @Unique(true)
    @Column
    login: string;

    @AllowNull(false)
    @Column
    password: string;

    @AllowNull(false)
    @Column
    age: number;
}
