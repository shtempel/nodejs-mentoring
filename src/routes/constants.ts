export const ROUTES = {
    userRoutes: {
        root: '/',
        user_id: '/:user_id',
        users: '/users'
    },
    groupRoutes: {
        root: '/',
        group_id: '/:group_id/',
        users: '/:group_id/users',
        groups: '/groups'
    },
    userGroupRoutes: {
        root: '/',
        group_id: '/:group_id',
        users_group: '/users_group',
    },
    invalid: {
        root: '*'
    }
};
