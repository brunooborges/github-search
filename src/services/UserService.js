import HttpClient from './utils/HttpClient';

class UserService {
  constructor() {
    this.httpClient = new HttpClient('https://api.github.com');
  }

  async getUserByName(userName, headers) {
    const user = await this.httpClient.get(`/search/users?q=${userName}`, { headers });

    return user;
  }
}

export default new UserService();
