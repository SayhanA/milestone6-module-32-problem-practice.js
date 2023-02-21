/*-------------- Practice Problem map(), filter(), find() --------------/*
/* ------------------------------------------------------------------
1)   You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
    Now convert this array into an even array (array with even
    numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
    method. Hints: add one to any odd number and it will become an even
    number.
------------------------------------------------------------------ */

const oddArray = [ 1, 3, 5, 7, 9 ];
const evenArray = [];

// For Loop solving 
for(const num of oddArray){
    evenArray.push(num+1)
}
// console.log(evenArray);

// Array.map() method solving
const even = oddArray.map(n =>(n+1) )
// console.log(even)


/* -----------------------------------------------------------------
2)  You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
    return/get all the elements which are divisible by 10 using
    array.filter() method.
------------------------------------------------------------------ */
const numbers = [33, 50, 79, 78, 90, 101, 30 ];
const filter = numbers.filter(n => n % 10 == 0)
// console.log(filter)


/*------------------------------------------------------------------
3)  Now do the same task of question 2. But do this using array.find()
    method. Then compare the output of question 2 & question 3.
------------------------------------------------------------------ */
const find = numbers.find(n => n % 10 == 0)
// console.log(find)



/*---------------------- Practice Problem reduce() ------------------------*/
/*------------------------------------------------------------------
1)  You have an array [ 1, 9, 17, 22 ]. Add the all elements
    of this array and give output. Do this using for loop &
    array.reduce() method.
------------------------------------------------------------------ */
const elements = [ 1, 9, 17, 22 ];
let sum = 0;
for(i=0; i<elements.length; i++){
    sum = sum + elements[i];
}
// console.log(sum);

// For..Of loop
let total = 0;
for(const element of elements){
    total = total + element
}
// console.log(total)

// Array.reduce() Method
const sumTotal = elements.reduce((previous , current) => previous + current, 0)
// console.log(sumTotal)


/* --------------------------------------------------------------------
2) Challenging Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.
-------------------------------------------------------------------*/
const peoples = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
];
// For Loop solving
let sumOfAge = 0;
for(const people of peoples){
    sumOfAge = sumOfAge + people.age ;
};
// console.log(sumOfAge)

// reduce() method solving
const totalAge = peoples.reduce((previous , current) => {
    return previous + current.age ;
},0)
// console.log(totalAge)

const totalAge1 = peoples.reduce((previous , current) => previous + current.age,0)
// console.log(totalAge1)


/*--------------- Practice Problem: Access Object values --------------------- */
const student = {
    name : 'Fredie',
    age: 26,
}
// console.log(student.age)
// 2nd way to find age
const {age} = student;
// console.log(age)
// 3rd way to find age
const age1 = student['age']
// console.log(age1)


/* ------------------------ Practice Problem: Access Object values -----------------------*/
let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
}
// console.log(data.location[0].city);
// 2nd way of finding city
const city1 = data['location'][0]['city']
// console.log(city1)


/* ---------------------- Practice Problem: Access Object Values -------------------------*/
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        Zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            len: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56332",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-Markets"
    }
}
/*----------------- value of email --------------------------*/
// console.log(user.email)
// 2nd way of finding email
const {email} = user;
// console.log(email);
// 3rd way of finding email
const email1 = user['email']
// console.log(email1)

/*----------------- the value of address --------------------------*/
// console.log(user.address);
// 2nd way of finding address
const {address} = user ;
// console.log(address);
// 3rd way of finding address
const address1 = user['address']
// console.log(address1)


/*----------------- the value of city --------------------------*/
// console.log(user.address.city);
// 2nd way to find the value of city
const {address:{city}} = user;
// console.log(city);
// 3rd way ot find the value of city
const theCity = user['address']['city']
// console.log(theCity)


/*----------------- the value of lat --------------------------*/
// console.log(user.address.geo.lat)
// 2nd way of finding the value of lat
const {address:{geo:{lat}}} = user;
// console.log(lat)
// 3rd way of finding the value of lat
const lat1 = user['address']['geo']['lat'];
// console.log(lat1) 


/*----------------- the value of company name --------------------------*/
// console.log(user.company.name);
// 2nd way of finding the value of company name
const {company:{name}} = user ;
// console.log(name)
// 3rd way of finding the value of company name
const companyName = user['company']['name'];
// console.log(companyName)