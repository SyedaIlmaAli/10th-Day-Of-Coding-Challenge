//Day 10

//Question 28

let age = 15;

if(age <= 2){
    console.log("You are a baby");
}else if(age >= 2 && age <= 12){
    console.log("You are a kid.");
}else if(age >= 13 && age <= 19){
    console.log("You are a teenager.");
}else if(age >= 20 && age <= 65){
    console.log("You are an adult.");
} else {
    console.log("You are a an elder.");
}

//Question 29

let favFruit : string[] = ["apple", "mango", "strawberry", "blueberry"];

if(favFruit.includes("strawberry")){
    console.log(`You really like ${favFruit[2]}`);
};

if(favFruit.includes("mango")){
    console.log(`You really like ${favFruit[1]}`);
}

//Question 30

let greetUser : string[] = ["admin", "Ilma", "Mehak", "Black07"];

greetUser.forEach(user => {
    if(user === "admin"){
        console.log(`Hello admin, would you like to see the report`);
    } else{
        console.log(`Hello ${user} thank you for logging in again.`);
    }
});


