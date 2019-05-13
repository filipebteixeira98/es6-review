const company = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do Sul',
    state: 'SC',
  }
};

const { name, address: { city, state } } = company;

console.log(name);
console.log(city);
console.log(state);

function getInfo({ name, age }) {
  return `${name} has ${age} years old.`;
}

console.log(getInfo({ name: 'Olivia', age: 18 }));
