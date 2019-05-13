// const arr = [1, 2, 3, 4, 5];
// arr.map(function(item) {
//   return item + 10;
// });

const arr = [1, 2, 3, 4, 5];

console.log(arr.map(item => item + 10));

// const usuario = { nome: 'Diego', idade: 23 };
// function mostraIdade(usuario) {
//   return usuario.idade;
// }
// mostraIdade(usuario);

const user = { name: 'Matheus', age: 26 };

const getAge = user => user.age;

console.log(getAge(user));

// const nome = "Diego";
// const idade = 23;
// function mostraUsuario(nome = 'Diego', idade = 18) {
//   return { nome, idade };
// }
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

const name = 'Diego';
const age = 23;

const getUser = (name = 'Filipe', age = 21) => ({ name, age });

console.log(getUser(name, age));
console.log(getUser(name));

// const promise = function() {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   })
// }

const promise = () => new Promise((resolve, reject) => resolve());
