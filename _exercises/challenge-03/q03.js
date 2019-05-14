// class Github {
//   static getRepositories(repo) {
//     axios.get(`https://api.github.com/repos/${repo}`)
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(err => {
//         console.log('Repositório não existe');
//       })
//   }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

import axios from 'axios';

class Github {
  static async getRepositories(repo) {
    try {
      const repoInfo = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(repoInfo.data);
    } catch(err) {
      console.warn('Repository does not exists!');
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
