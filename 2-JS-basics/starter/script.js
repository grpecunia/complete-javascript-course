/***** First Lesson

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);


var job;
console.log(job);

job = 'Teacher';
console.log(job);

*****************/

/** Second Lesson - Variable mutation and type coercion

var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

age = 'twenty-eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried)

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/

/****************
* Basic Operators


var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);   // Add
console.log(now - 4);   // Substract
console.log(now * 20);  // Multiply
console.log(now / 8);   // Divide

// Logical Operators
var johnOlder = ageJohn < ageMark
console.log(johnOlder)

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John!');
var x;
console.log(typeof x);

*/

/*******************
* Operator precedence


var now = 2019
var yearJohn = 1989
var fullAge = 18

var isFullAge = now - yearJohn >= fullAge;

*/

/** 1st Coding Challenge //

var wJohn, hJohn, bmiJohn, wMark, hMark, bmiMark;
wJohn = 160;
hJohn = 3.5;
bmiJohn = wJohn / (hJohn * hJohn);
wMark = 190;
hMark = 3.7;
bmiMark = wMark / (hMark * hMark);

var bmiJohnGreater = bmiJohn > bmiMark;
console.log("Is John's BMI greater than Mark's? " + bmiJohnGreater)

*******
* IF ? ELSE Statements


var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
    } else {
        console.log(firstName + ' will hopefully marry soon  :)');
    }

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
    } else {
        console.log(firstName + ' will hopefully marry soon  :)');
    }

var wJohn, hJohn, bmiJohn, wMark, hMark, bmiMark;
wJohn = 160;
hJohn = 3.5;
bmiJohn = wJohn / (hJohn * hJohn);
wMark = 190;
hMark = 3.7;
bmiMark = wMark / (hMark * hMark);

//var bmiJohnGreater = bmiJohn > bmiMark;
//console.log("Is John's BMI greater than Mark's? " + bmiJohnGreater)

if (bmiJohn > bmiMark) {
    console.log("John's BMI is higher than Mark's!");
    } else {
        console.log("Mark's BMI is higher than John's!");
    }

********
* Boolean Logic
*


var firstName = 'John';
var age = 21;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.')
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.')
} else {
    console.log(firstName + ' is a man.')
}



************************************************
** The ternary operator and switch statements ** ->> This is pretty fucking useful!   ;) - Gucci
************************************************

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// Switch Statement

var job = 'student'
switch (job){
        case 'teacher': // notice the ' : ' ****
        case 'instructor':
            console.log(firstName + ' teaches kids how to code.');
            break;
        case 'driver':
            console.log(firstName + ' drives an Uber in Lisbon.');
            break;
        case 'designer':
            console.log(firstName + ' designs beautiful websites.');
            break;
        default:
            console.log(firstName + ' does something else.');
}

switch (true) {
    case age < 13 : console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20 : console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30 : console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}



******************
** Truthy and Falsy Values and equality operators

Falsy Values - undefined, null, 0, '', NaN
Truthy Values - not falsy values 



var height;
height = 23;

if (height || height === 0 ) {
    console.log('Variable is defined.')
}   else {
    console.log('Variable is NOT defined.')
}

//Equality operators

if (height == '23'){
    console.log('The == operator does type coercion!')
}  



*************************
*** SECOND CODING CHALLENGE
*****



var johnG1, johnG2, johnG3, johnAve, mikeG1, mikeG2, mikeG3, mikeAve, maryG1, maryG2, maryG3, maryAve;
johnG1 = 300;
johnG2 = 120;
johnG3 = 103;
johnAve = (johnG1 + johnG2 + johnG3) / 3;

mikeG1 = 1000;
mikeG2 = 94;
mikeG3 = 123;
mikeAve = (mikeG1 + mikeG2 + mikeG3) / 3;

maryG1 = 97;
maryG2 = 134;
maryG3 = 105;
maryAve = (maryG1 + maryG2 + maryG3) / 3;

if (johnAve > mikeAve && johnAve > maryAve) {
    console.log('John wins with an average score of ' + johnAve + '!');
} else if (mikeAve > johnAve && mikeAve > maryAve){
    console.log('Mike wins with an average score of ' + mikeAve + '!');
} else if (maryAve > johnAve && maryAve > mikeAve) {
    console.log('Mary wins with an average score of ' + maryAve + '!');
} else {
    console.log("There might be a draw situation in here!");
}

console.log(johnAve, mikeAve, maryAve);


*********************************
** FUNCTIONS ******
*****




function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1988);
var ageMike = calculateAge(2011);
var ageJake = calculateAge(1945);

console.log(ageJohn, ageMike, ageJake);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' will retire in ' + retirement + ' years.')

    } else {
         console.log(firstName + ' is already retired!')
   
    }
}

yearsUntilRetirement(1988, 'Gucci');
yearsUntilRetirement(2011, 'Randy');
yearsUntilRetirement(1945, 'Banshi');
yearsUntilRetirement(1989, 'Lyan');




/*********************************
** FUNCTIONS Statements and Expressions ******
*****



var whatDoYouDo = function (job, firstName){
    switch (job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designes beautiful websites';
        default: 
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Gucci'));
console.log(whatDoYouDo('retired', 'Papo'));
console.log(whatDoYouDo('driver', 'Lyan'));



/*********************************
** FUNCTIONS Statements and Expressions ******
*****



var names = ['Gucci', 'Lyan', 'Banshi'];
var years = new Array(1988, 1989, 1985);

console.log(names);
console.log(names.length);

names[1] = 'Benji';
names[names.length] = 'Grinch';
console.log(names);

var gucci = ['Gucci','Smith', 1988, 'designer'];

var isDesigner = gucci.indexOf('designer') === -1 ? 'Gucci is NOT a designer' : 'Gucci IS a designer';
console.log(isDesigner);



/*********************************
** CODING CHALLENGE #3 ******
*****



var bills = [124,48,268];
var billsTipOnly = [tipCalculator(bills[0]),
 tipCalculator(bills[1]),
 tipCalculator(bills[2]),];
var billsTotalPlusTip = 
[
 bills[0] + billsTipOnly[0],
 bills[1] + billsTipOnly[1],
 bills[2] + billsTipOnly[2]
];

function tipCalculator(bill) {
    var percentage;
   if (bill < 50){
        percentage = .2;
   } else if (bill >= 50 && bill < 200) {
       percentage = .15;
   } else { 
        percentage = .1;
   }
    return percentage * bill;
}



console.log(billsTipOnly);
console.log(billsTotalPlusTip);

/*********************************
** CODING CHALLENGE #4 ******
****


var mark = {
    fullName: 'Mark Ronson',
    mass: 60,
    height: 1.7,
    calcBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Bravo',
    mass: 66,
    height: 1.5,
    calcBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};



if (john.calcBMI() === mark.calcBMI()) {
    console.log('Both, Mr. ' + john.fullName + ' and Mr. ' + mark.fullName + ' have the same BMI @ ' + john.bmi );
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + ' has a higher BMI of about ' + john.bmi);
} else {
    console.log(mark.fullName + ' has a higher BMI of about ' + mark.bmi)
}


    

/*********************************
** Loops & Iterations ******
****



for (var i = 0; i <= 33; i += 3) {
    console.log(i);
}

var gucci = ['Gucci', 'Mane', 1988, 'designer', false]

//* - FOR Loops

for (var i = 0; i < gucci.length; i++) {
    console.log(gucci[i]);
}

//* - WHILE Loops

var i = 1
while (i < gucci.length) {
    console.log(gucci[i]);
    i++;
}



//* - Continue and break statements

var gucci = ['Gucci', 'Mane', 1988, 'designer', false, 'orange']

for (var i = 0; i < gucci.length; i++) {
    if (typeof gucci[i] !== 'string') continue;
    console.log(gucci[i]);
}

for (var i = 0; i < gucci.length; i++) {
    if (typeof gucci[i] !== 'string') break;
    console.log(gucci[i]);
}

/* 

/** Looping Backwards **

var gucci = ['Gucci', 'Mane', 1988, 'designer', false, 'orange']


for (var i = gucci.length - 1; i >= 0 ; i--) {
    if (typeof gucci[i] !== 'string') continue;
    console.log(gucci[i]);
}







/*********************************
** CODING CHALLENGE #5 ******
****

*/

//var billsTipOnly = [tipCalculator(billsJohn[0]),
// tipCalculator(billsJohn[1]),
// tipCalculator(billsJohn[2]),
// tipCalculator(billsJohn[3]),
// tipCalculator(billsJohn[4]),];
//
//var billsTotalPlusTip = 
//[
// billsJohn[0] + billsTipOnly[0],
// billsJohn[1] + billsTipOnly[1],
// billsJohn[2] + billsTipOnly[2],
// billsJohn[3] + billsTipOnly[3],
// billsJohn[4] + billsTipOnly[4],
//
//];
/*
var billsJohn = [124,48,268,180,42];

function tipCalculator(bill) {
    var percentage;
   if (bill < 50){
        percentage = .2;
   } else if (bill >= 50 && bill < 200) {
       percentage = .15;
   } else { 
        percentage = .1;
   }
    return percentage * bill;
    var billsTips = [i += i];
}


function getTip() {
    for (let i = 0; i < getTip.length; i++){
        var billsTips = [i]
        console.log(getTip([i]));
    }
}

//console.log(billsTipOnly);
//console.log(billsTotalPlusTip);

//*** ANSWER CODING CHALLENGE #3 */

var john = {
    fullName: 'John Smith',
    bills: [128, 48, 262, 180, 42],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 50) {
                percentage = .2
            } else if (bill >= 50 && bill < 200) {
                percentage = .15
            } else {
                percentage = .1
            }

            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.tips[i] + bill;
        }


    }

}

var mark = {
    fullName: 'Mark Smith',
    bills: [200, 76, 765, 60, 20],
    calcTips: function () {
        this.tips = [];
        this.finalValues = [];
        for (var i = 0; i < this.bills.length; i++) {
            var percentage;
            var bill = this.bills[i];
            if (bill < 100) {
                percentage = .2
            } else if (bill >= 100 && bill < 300) {
                percentage = .1
            } else {
                percentage = .25
            }
            this.tips[i] = bill * percentage;
            this.finalValues[i] = this.tips[i] + bill;
        }
    }
}


function calcAverage(tips) {
    var sum = 0;
    var divisor = tips.length
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    aveTip = sum / divisor
    return aveTip;
}

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark)

if (john.tips > mark.tips) {
    console.log(`John is the big baller with an average tip of $${Math.floor(john.average)}.`)
} else {
    console.log(`Mark is the big baller with an average tip of $${Math.floor(mark.average)}.`)
};
