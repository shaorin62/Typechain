
interface Human {
    name : String;
    gender : String;
    age : number;
}

const name = "Shaorin",
age = 34,
gender = "male";

const person = {
    name : "shaorin",
    gender : "male",
    age : 34
}

const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are ${gender}`);
}

const sayHi2 = (person : Human) => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are ${person.gender}`);
}


sayHi(name, age);

console.log(sayHi2(person));


export{};