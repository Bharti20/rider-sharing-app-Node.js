const input = require('readline-sync')

console.log("********** Welcome to B-uber App ************")
console.log("*********** This app will charge fare based on distance. Per/km cost is 5 rupees")

let listOfRiders = ['rider1', 'rider2', 'rider3', 'rider4']
let riderLocation = ['huskur', 'sarjapur', 'dmart', 'shantipura']
var account_of_rider1 = []
var account_of_rider2 = []
var account_of_rider3 = []
var account_of_rider4 = []
let r1 = 0
let r2 = 0
let r3 = 0
let r4 = 0
let i = 0
while(i<listOfRiders.length) {
    console.log(listOfRiders[i], "in" ,riderLocation[i])
    i++
};
var rider1Earned = 0
let selectRider = input.question('Select a rider. rider1, rider2, rider3, rider4 ----')
function chooseRider(array) {
    if(selectRider == 'rider1') {
        let money = process()
        account_of_rider1.push(money)
        let rider1_earned = calculateEarning(account_of_rider1)
        r1 = rider1_earned
        chance()
    }
    else if(selectRider == 'rider2') {
        let money = process()
        account_of_rider2.push(money)
        let all_earned = calculateEarning(account_of_rider2)
        r2 = all_earned
        chance()
    }
    else if(selectRider == 'rider3') {
        let money = process()
        account_of_rider3.push(money)
        let all_earned = calculateEarning(account_of_rider3)
        r3 = all_earned
        chance()
    }
    else if(selectRider == 'rider4') {
        let money = process()
        account_of_rider4.push(money)
        let all_earned = calculateEarning(account_of_rider4)
        r4 = all_earned
        chance()
        
    };
};
chooseRider()
function process() {
    console.log('What do you want to do. book, cancel ---?')
    let userChoice = input.question('book, cancel?')
    if(userChoice == 'book') {
        let dictance = input.questionInt('Enter killo miter....')
        var totalFare = dictance*5
        console.log(`fare ${totalFare}`)
        let pyment = input.question('choose pyment method. Gpay, phonePay, cash ---')
        if(pyment == 'Gpay' || pyment == 'phonePay') {
            let contact = input.question('Enter phonPay/Gpay number ---')
            let amount = input.question('Enter amount---')
            let password = input.question('Enter your 6 digit password---')
            console.log('Successfully  pyment done')
            console.log('Thank you for riding with B-uber')
            return totalFare
        }else if ( pyment == 'cash') {
            console.log(`You have to pay total ${totalFare}` )
            console.log('Thank you for riding with B-uber')
            return totalFare
        }else{
            console.log('invalid input')
        }
        
    }else if ( userChoice == 'cancel'){
        console.log('Thank you for visite')
    }else{
        console.log('invalid input')
    };
};


function calculateEarning(array) {
    let i = 0
    let sum = 0
    while(i<array.length) {
        sum = sum + array[i]
        i++
    };
    return sum

};

function chance() {
    while(true) {
        let user = input.question('Do you want to ride again? yes/no ----')
        if(user == 'yes') {
            chooseRider()
        }else if (user == 'no') {
            console.log(`total earing of rider1 ${r1}`)
            console.log(`total earing of rider2 ${r2}`)
            console.log(`total earing of rider3 ${r3}`)
            console.log(`total earing of rider4 ${r4}`)
            break;
        };
    };

};
