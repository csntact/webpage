/*Összegzés*/
let numericArray = [1,3,2,5,4,7,6,9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray [i];
}
console.log("Sum: ", sum);

/* Számolás */
let db = 0;
for (let i =0; i< numericArray.length; i++){
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

/* Szélsőérték */
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if  (numericArray[i] > biggest){
        biggest = numericArray[i];
    }
}
console.log("The biggest elemt is ", biggest);


let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if  (numericArray[i] < smallest){
        smallest = numericArray[i];
    }
}
console.log("The smallest elemt is ", smallest);

/* Eldőntés tétele */
let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 15){
        contains = true;
    }
}
console.log("Is it contains 15? ", contains)


/* Objektumok */

let user = {
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"
};
let admin = new Object();
let customer = {};

Object.keys(user);

console.log(user.name)
