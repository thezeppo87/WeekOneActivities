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


// Activity Three

let numbers = []
for(let i = 0; i < 6; i++) {
  numbers.push(Math.floor(Math.random() * 51) + 1)
}
console.log(numbers)

// Activity Six

let password = "scooby"

if(password.length <= 7){
    console.log("You need a longer password")
} else
{console.log(password)
}


// Activity Seven
let number = 15

if(number % 3 == 0 || num % 5 == 0){
    console.log("This number is divisible by three or five")
} else
{console.log("This number is not divisible by three or five")
}