// const person = {
//    name: 'Andrew',
//    age: 26,
//    location : {
//       city: 'Philadelphia',
//       temp: 92
//    }
// };

// const {name:firstname = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstname} is ${age}.`);

// const { temp, city } = person.location;
// if(city && temp) {
//    console.log(`It's ${temp} in ${city}`);   
// }

// const book = {
//    title: 'Ego is the Enemy',
//    author: 'Ryan Holiday',
//    publisher: {
//       // name: 'Penguin'
//    }
// };

// const {name:publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product,s,m,l] = item;

console.log(`A medium ${product} consts ${m}`);