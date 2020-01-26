///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1988)

// function calculateAge(year) {
//     console.log(2020 - year)
// }

// var retirement = function (year) {
//     console.log(65 - (2020 - year))
// }

// retirement(1988);

// console.log(age)
// var age = 31;
// console.log(age)

// function foo(){
//     var age = 75;
//     console.log(age);
// }

// foo();
// console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


// console.log(this);

function calculateAge(year) {
    // console.log(2020-year)
    // console.log(this)
}

var joey = {
    name: 'Joey',
    yearOfBirth: 1957,
    calculateAge: function calculateAge() {
        // console.log(this)
        this.age = 2020 - this.yearOfBirth;
    }
}

joey.calculateAge();


var pecu = {
    name: 'Pecu',
    yearOfBirth: 1988
}

pecu.calculateAge = joey.calculateAge
pecu.calculateAge();