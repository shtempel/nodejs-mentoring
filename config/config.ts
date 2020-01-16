import { Dialect } from 'sequelize';

const dialect: Dialect = 'postgres';

export default {
    dialect: dialect,
    host: "ec2-54-246-100-246.eu-west-1.compute.amazonaws.com",
    port: 5432,
    database: "d3ovs0khj82a3h",
    username: "xddqvrfzwdwecr",
    password: "3f41b5047cddbb5261d07e2a6e82eb3f6451de8b3885e01cf6136af5954d7a37",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
};
