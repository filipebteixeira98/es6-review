// const buscaUsuario = usuario => {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     });
// }
// buscaUsuario('diego3g');

import axios from 'axios';

const getUser = async username => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);

    console.log(response.data);
  } catch(err) {
    console.warn('User does not exists!');
  }
};

getUser('diego3g');
