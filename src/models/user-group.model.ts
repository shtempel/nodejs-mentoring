import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';

import config from './config';
import { Group } from './group.model';
import { User } from './user.model';

@Table({
    schema: config.schema,
    tableName: config.tables.userGroups,
    paranoid: true
})
export class UserGroup extends Model<UserGroup> {
    @PrimaryKey
    @AutoIncrement
    @Column
    user_group_id: number;

    @ForeignKey(() => Group)
    @Column
    group_id: string;

    @ForeignKey(() => User)
    @Column
    user_id: string;
}
