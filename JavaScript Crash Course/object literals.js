//object literals

const person = {
firstname:"Talha",
lastname:"Faisal",
age:19,
hobbies:["cricket","programing","youtbe watching"],
adress: {
    street:"4 near honda showroom",
    house:"house no 56 ",
    city:"lahore",
    state:"punjab"

 }
}

console.log(person);
console.log(person.firstname,person.lastname);
console.log(person.hobbies[2]);
console.log(person.age);
console.log(person.adress.city);
console.log(person.adress.house);


const{firstname,lastname,adress:{city}}=person;

console.log(firstname);
console.log(lastname);
console.log(city);

person.email="talhafaisal20003@gmail.com";
person.number= 0321317;


const todos=[
    {
      id:1,
      person:"talha",
      work:"owner"
    },
    {
        id:2,
        person:"ghani",
        work:"owner"
      },
      {
        id:3,
        person:"najam",
        work:"manager"
      },
]

console.log(todos[0].work)
console.log(todos[1].person)
console.log(todos[2].id)