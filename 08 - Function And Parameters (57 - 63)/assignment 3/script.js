function ageInTime(theAge) {
    if (theAge < 10 || theAge > 100) console.log('Age Out Of Range');
    else {
        console.log(`Age In Months: ${theAge * 12}`);
        console.log(`Age In Weeks: ${theAge * 12 * 4}`);
        console.log(`Age In Days: ${theAge * 12 * 4 * 7}`);
        console.log(`Age In Hours: ${theAge * 12 * 4 * 7 * 24}`);
        console.log(`Age In Minutes: ${theAge * 12 * 4 * 7 * 24 * 60}`);
        console.log(`Age In Seconds: ${theAge * 12 * 4 * 7 * 24 * 60 * 60}`);
    }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months