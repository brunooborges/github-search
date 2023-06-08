import HttpClient from './utils/HttpClient';

class UserService {
  constructor() {
    this.httpClient = new HttpClient('https://api.github.com');
  }

  async getUserByName(userName) {
    // const accessToken = 'Insert your Github access token here';

    const user = await this.httpClient.get(`/search/users?q=${userName}`, {
      Accept: 'application/vnd.github+json',
      // Authorization: `Bearer ${accessToken}`,
    });

    return user;
  }
}

export default new UserService();
