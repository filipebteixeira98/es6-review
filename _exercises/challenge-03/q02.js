// import axios from 'axios';
// function getUserFromGithub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

import axios from 'axios';

async function getUserFromGithub(username) {
  try {
    const userInfo = await axios.get(`https://api.github.com/users/${username}`);

    console.log(userInfo.data);
  } catch(err) {
    console.error('Page not found!');
  }
}

getUserFromGithub('filipebteixeira98');
getUserFromGithub('diego3g124123');
