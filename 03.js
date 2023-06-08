const user = {
    age: 20,
    name : 'John',
};

const info = object =>{
    const {age, name } = object;
    return `Name: ${name}, age: ${age}`;
}

console.log(info(user));