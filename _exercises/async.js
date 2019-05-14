const myPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('Ok') }, 2000);
});

async function execPromise() {
  const response = await myPromise();

  console.log(response);
}

execPromise();
