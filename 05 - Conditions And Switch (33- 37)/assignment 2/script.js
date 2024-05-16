let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 === str) console.log(`${num1} Is The Same Value As ${str}`);
else if (num1 == str) console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
else if (num1 != str2) console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
else if (str !== str2) console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
/* Output
    "{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"
*/