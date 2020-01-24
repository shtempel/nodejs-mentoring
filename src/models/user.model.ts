import {
    Column,
    Table,
    Model,
    PrimaryKey,
    AllowNull,
    Unique,
    BelongsToMany,
    DataType
} from 'sequelize-typescript';

import config from './config';
import { Group } from './group.model';
import { UserGroup } from './user-group.model';

@Table({
    schema: config.schema,
    tableName: config.tables.users,
    paranoid: true
})
export class User extends Model<User> {
    @BelongsToMany(() => Group, () => UserGroup)
    groups: Group[];

    @PrimaryKey
    @AllowNull(false)
    @Unique(true)
    @Column(DataType.STRING)
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
