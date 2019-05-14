import axios from 'axios'

class Api {
  static async getUserInfo(username) {
    try {
      const userInfo = await axios.get(`https://api.github.com/users/${username}`);

      console.log(userInfo.data);
    } catch(error) {
      console.warn(error);
    }
  }
}

Api.getUserInfo('filipebteixeira98');
