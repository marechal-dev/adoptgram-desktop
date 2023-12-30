import { axiosSocialApiClient } from '../lib/axios';

export class AccountsService {
  private static FETCH_ALL_COMMON_USERS_ENDPOINT = '/common-users';

  private static FETCH_ALL_ORGANIZATIONS_ENDPOINT = '/organizations';

  public static fetchAllCommonUsers() {
    return axiosSocialApiClient.get(this.FETCH_ALL_COMMON_USERS_ENDPOINT);
  }

  public static fetchAllOrganizations() {
    return axiosSocialApiClient.get(this.FETCH_ALL_ORGANIZATIONS_ENDPOINT);
  }
}
