const arr = [1, 2, 3, 4, 5, 6];
const [ first, ...newArr ] = arr;

console.log(first);
console.log(newArr);

function calculateSum(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(calculateSum(1, 2, 3));

const user = {
  name: 'Ethan',
  age: 19,
  address: {
    city: 'New York',
    state: 'NY',
    country: 'USA',
  }
};

const newUser = { ...user, name: 'Peter' };
const anotherUser = { ...user, address: { ...user.address, city: 'Massachusetts' } };

console.log(newUser);
console.log(anotherUser);
