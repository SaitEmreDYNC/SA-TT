var x = 10;
console.log(x);

let greeting = "hello world";
console.log(greeting);


  


let pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989;
console.log(pi);

function exampleConst(){    
    const z = 30;  
    console.log(z);  
}
exampleConst();

function greet(name){
    console.log(`Hello,${name}!`);
}
greet('Sait');

const add = function (a,b){
    return a + b;
};
console.log(add(5,3));

let basePrice = 50;
let discount = 0.2;

let finalPrice = basePrice - (basePrice * discount);
console.log(finalPrice);


let fruits = ["apple","banana","orange","mango"]
console.log(fruits);

console.log(fruits[3]);

let person = {
    firstName: "Sait Emre",
    lastName: "Dayanç",
    age1: 19,
    hobbies: ["Gitar Çalmak","Kalp Kırmak"],
    adress: {
     acıkadres: "Edanın yan sokağı",
     city: "İstanbul",
     country: "Türkiye",
    }
}

console.log(person)

for (let i = 0; i < 5; i++) {1
console.log(i);
}


for (let i = 0; i < fruits.length; i++){
    console.log(i);

}

for (let key in person) {
    console.log(key + ":" + person[key]);


}

let temperature = 25;
if (temperature > 20) {
    console.log(`it's a warm day`);
}

let hour = 18;

if (hour < 12) {
    consol.log("Günaydın");
} else {
    console.log("Yakşamlar");
}

let age = 19
if (age >= 18) {
    if (age < 21){
        console.log("You are an adult but you can't drink");
    } else {
        console.log("You're an adult and you can drink");
    }
    } else {
        console.log("You're a minor");
}






