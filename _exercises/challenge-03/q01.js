// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// function umPorSegundo() {
//   delay().then(() => {
//     console.log('1s');
//     delay().then(() => {
//       console.log('2s');
//       delay().then(() => {
//         console.log('3s');
//       });
//     })
//   });
// }
// umPorSegundo();

let time = 1;
const delay = () => new Promise(resolve => setTimeout(resolve(`${time++}s`), 1000));

async function getSeconds() {
  console.log(await delay());
  console.log(await delay());
  console.log(await delay());
}

getSeconds();
