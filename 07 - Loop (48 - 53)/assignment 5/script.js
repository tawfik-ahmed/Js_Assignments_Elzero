let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let zero = friends.length - friends.length;
let counter = zero;

for (let i = zero; i < friends.length; i++) {
    if (friends[i][zero] !== letter.toUpperCase()) {
        counter++;
        console.log(`${counter} => ${friends[i]}`);
    }
}

/* Output
"1 => Sayed"
"2 => Eman"
"3 => Mahmoud"
"4 => Osama"
"5 => Sameh"
*/