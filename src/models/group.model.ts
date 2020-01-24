import { AllowNull, BelongsToMany, Column, DataType, Model, PrimaryKey, Table, Unique } from 'sequelize-typescript';

import config from './config';
import { UserGroup } from './user-group.model';
import { User } from './user.model';

export type PermissionsType = 'READ' | 'WRITE' | 'DELETE' | 'SHARE' | 'UPLOAD_FILES';

@Table({
    schema: config.schema,
    tableName: config.tables.groups,
    paranoid: false
})
export class Group extends Model<Group> {
    @BelongsToMany(() => User, () => UserGroup)
    users: User[];

    @PrimaryKey
    @Unique(true)
    @AllowNull(false)
    @Column
    group_id: string;

    @Column
    name: string;

    @Column(DataType.ARRAY(DataType.STRING))
    permissions: PermissionsType[];
}
