const users = [
  { name: 'Diego', age: 23, company: 'Rocketseat' },
  { name: 'Gabriel', age: 15, company: 'Rocketseat' },
  { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(({ age }) => age);
console.log(ages);

const ofAge = users.filter(({ age, company }) => company === 'Rocketseat' && age >= 18);
console.log(ofAge);

const work = users.find(({ company }) => company === 'Google');
console.log(work);

const calculus = users.map(user => ({ ...user, user.age: age * 2 }).filter(({ age }) => age <= 50);
console.log(calculus);
