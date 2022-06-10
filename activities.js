// Activity One

let num = 15

if (num % 5 == 0 && num % 3== 0){
    console.log("fizz buzz")
} else if (num % 5== 0){
    console.log("buzz")
} else if (num % 3== 0){
    console.log("fizz")
} else{
    console.log(num)
}

// Activity Two

let randomNum = []
while (randomNum.length < 6){
    numb = Math.floor(Math.random()*(30)+1)
if (numb % 7 == 0){
    console.log(`The number ${numb} is divisible by seven.`)
}else {
    console.log(`The number ${numb} is not divisible by seven.`)}
randomNum.push(numb)
console.log(randomNum)
}

// Activity Three

let numbers = []
for(let i = 0; i < 6; i++) {
  numbers.push(Math.floor(Math.random() * 51) + 1)
}
console.log(numbers)

// Activity Four

let backwards = 9
for(let a = 0; a < 20; a++){
    if (a % 2 == 0){
        console.log(backwards)
        backwards--}
}
while(backwards >= 0){
    console.log(backwards)
    backwards--
}

// Activity Five

const pet ={dogsName:"Theodore",
typeOfPet:"Dog",
age:"4 months", 
colour:"Black",
eat(){
    return console.log(`${this.dogsName} is eating`)}, 
drink(){
    return console.log(`${this.dogsName} is drinking`)}
}
pet.eat()
pet.drink()

// Activity Six

let password = "scooby"

if(password.length <= 7){
    console.log("You need a longer password")
} else{
    console.log(password)
}


// Activity Seven

let number = 15

if(number % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by three or five")
} else {
    console.log("This number is not divisible by three or five")
}