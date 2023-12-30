export const IPC = {
  AUTH: {
    AUTHENTICATE: 'auth::authenticate',
  },
  ACCOUNTS: {
    COMMON_USERS: {
      FETCH_ALL: 'accounts::common-users::fetch-all',
      SAVE: 'accounts::common-users::save',
      DELETE: 'accounts::common-users::delete',
    },
    ORGANIZATIONS: {
      FETCH_ALL: 'accounts::organizations::fetch-all',
      SAVE: 'accounts::organizations::save',
      DELETE: 'accounts::organizations::delete',
    },
  },
};
