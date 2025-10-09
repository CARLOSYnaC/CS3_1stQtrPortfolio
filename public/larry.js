console.log('Hiiiiiiiiiiiiiiiiiiiiii!!!!!!')

// gma - 7
// abs-cbn - 2
// tv5 - 5
// ibc - 13
// ptv - 4

rl = require('readline')
rli = rl.createInterface({
    input: process.stdin,
})

rli.on('line', give_station)

function give_station(num) {
    switch (Number(num)) {
case 7:
    console.log('gma - 7')
    break
case 5:
    console.log('tv5 - 5')
    break
case 13:
    console.log('ibc - 13')
    break
case 4:
    console.log('ptv - 4')
    break
default:
    console.log('Unknown station')
}}

// lemme put this here for a sec 
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for (let i = 1; i <=10; i++) {
    console.log (i)
}

i = 1;
while (i <= 3) {
    console.log(i);
    i++;
}

i = 1;
do {
    console.log(i);
    i++;
} while (i <= 3);

fav_fruits = ["mango", "banana", "apple"];
fav_fruits.push("strawberry")
var popped = fav_fruits.pop()

var shifted = fav_frits.shift()
fav_fruits.unshift("kiwi")

console.log(popped, shifted)

for(let i=0; i<fav_fruits.length; i++) {
    console.log(fav_fruits[i])
}

for(let fruit of fav_fruits) {
    console.log(fruit)
}

fav_fruits.forEach(print_fruit)

function print_fruit(fruit) {
    console.log(fruit)
}
