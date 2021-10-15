// const input = require('readline-sync')
// console.log()
// console.log("🚘🚖🚘🚖🚘🚖🚘🚖🚘🚖🚘🚖🚘🚖 Welcome to B-uber App 🚘🚖🚘🚖🚘🚖🚘🚖🚘🚖🚘🚖🚘🚖 ")
// console.log()
// //console.log("******** This app will charge based on distance. Per/km cost is 5 rupees ******")

// let listOfRiders = ['bharti', 'nikita', 'pravin', 'rajesh']
// let riderLocation = ['huskur', 'sarjapur', 'dmart', 'shantipura']
// var account_of_rider1 = []
// var account_of_rider2 = []
// var account_of_rider3 = []
// var account_of_rider4 = []
// let r1 = 0
// let r2 = 0
// let r3 = 0
// let r4 = 0

// let ridesOfRider1 = 0
// let ridesOfRider2 = 0
// let ridesOfRider3 = 0
// let ridesOfRider4 = 0
// let i = 0
// while(i<listOfRiders.length) {
//     var locationOfRider = riderLocation[Math.floor(Math.random()*riderLocation.length)]
//     console.log(listOfRiders[i], "in" ,locationOfRider, '🚘')
//     i++
// };
// var rider1Earned = 0
// var bharti_waiting_money = 0
// var nikita_waiting_money = 0
// var pravin_waiting_money = 0
// var rajesh_waiting_money = 0
// // let selectRider = input.question('Select a rider. rider1, rider2, rider3, rider4 ----')
// function chooseRider(array) {
//     let selectRider = input.question('Select a rider:- bharti, nikita, pravin, rajesh ----')
//     if(selectRider == 'bharti') {
//         ridesOfRider1 = ridesOfRider1+1
//         let money = process()
//         account_of_rider1.push(money)
//         let all_earned = calculateEarning(account_of_rider1)
//         r1 = all_earned
//         let extraMoney = chance()
//         if(extraMoney == undefined) {
//             bharti_waiting_money = bharti_waiting_money + 0
//         }else{
//             bharti_waiting_money = bharti_waiting_money + extraMoney
//         };
        
//     }
//     else if(selectRider == 'nikita') {
//         ridesOfRider2 = ridesOfRider2+1
//         let money = process()
//         account_of_rider2.push(money)
//         let all_earned = calculateEarning(account_of_rider2)
//         r2 = all_earned
//         let extraMoney = chance()
//         if(extraMoney == undefined) {
//             nikita_waiting_money = nikita_waiting_money + 0
//         }else{
//             nikita_waiting_money = nikita_waiting_money + extraMoney
//         }
//     }
//     else if(selectRider == 'pravin') {
//         ridesOfRider3 = ridesOfRider3+1
//         let money = process()
//         account_of_rider3.push(money)
//         let all_earned = calculateEarning(account_of_rider3)
//         r3 = all_earned
//         let extraMoney = chance()
//         if(extraMoney == undefined) {
//             pravin_waiting_money = pravin_waiting_money + 0
//         }else{
//             pravin_waiting_money = pravin_waiting_money + extraMoney
//         }
//     }
//     else if(selectRider == 'rajesh') {
//         ridesOfRider4 = ridesOfRider4+1
//         let money = process()
//         account_of_rider4.push(money)
//         let all_earned = calculateEarning(account_of_rider4)
//         r4 = all_earned
//         let extraMoney = chance()
//         if(extraMoney == undefined) {
//             rajesh_waiting_money = rajesh_waiting_money + 0
//         }else{
//             rajesh_waiting_money = rajesh_waiting_money + extraMoney
//         }
//     }else{
//         console.log('invalid input')
//     }
// };
// chooseRider()
// function process() {
//     console.log(                                                             )
//     let userChoice = input.question('What do you want to do. book/cancel ---?')
//     var totalFare = 0
//     if(userChoice == 'book') {
//         let dictance = input.questionInt('Enter killo miter....')
//         var totalFare = 0
//         totalFare = dictance*5
//         console.log(`fare ${totalFare}`)
//         let pyment = input.question('choose pyment method. Gpay, phonePay, cash ---')
//         if(pyment == 'Gpay' || pyment == 'phonePay') {
//             let contact = input.question('Enter phonPay/Gpay number ---')
//             let amount = input.question('Enter amount---')
//             let password = input.question('Enter your 6 digit password---')
//             console.log(                                                        )
//             console.log('Pyment Done Successfully ')
//             console.log('Thank you for riding with B-uber')
//             console.log(                                                         )
//             return totalFare
//         }else if ( pyment == 'cash') {
//             console.log(                                                             )
//             console.log(`You have to pay total ${totalFare}` )
//             console.log('Thank you for riding with B-uber')
//             console.log(                                                                 )
//             return totalFare
//         }else{
//             console.log('invalid input')
//         }
        
//     }else if ( userChoice == 'cancel'){
//         console.log('Thank you for visite')
//         console.log(                                                         )
//         return totalFare
//     }else{
//         console.log('invalid input')
//         return totalFare
//     };
// };
// function calculateEarning(array) {
//     let i = 0
//     let sum = 0
//     while(i<array.length) {
//         sum = sum + array[i]
//         i++
//     };
//     return sum

// };

// function chance() {
//     while(true) {
//         let user = input.question('Do you want to ride again or wait? yes/wait/no ----')
//         if(user == 'yes') {
//             chooseRider()
//             break;
//         }else if (user == 'wait') {
//             console.log('Per Minute cost is 2 rupees')
//             let time = input.question('enter how much time you want to wait me for you?--')
//             let waitingMoney = time*2
//             return waitingMoney
//         }
//         else if (user == 'no') {
//             break;
//         };
//     };
// };
// console.log('🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼'                                 )
// console.log(                                                                        )
// console.log(                                                    )
// console.log(`total earing of bharti ${r1+bharti_waiting_money} 💵`)
// console.log(`total earning of nikita ${r2+nikita_waiting_money} 💵`)
// console.log(`total earning of pravin ${r3+pravin_waiting_money} 💵`)
// console.log(`total earning of rajesh ${r4+rajesh_waiting_money} 💵`)
// console.log(                                                              )
// let riderDetails = input.question('Do you want to see rider rides? yes/no --')
// if(riderDetails == 'yes') {
//     console.log()
//     console.log(`total rides of bharti:- ${ridesOfRider1}`)
//     console.log(`total rides of nikita:- ${ridesOfRider2}`)
//     console.log(`total rides of pravin:- ${ridesOfRider3}`)
//     console.log(`total rides of rajesh:- ${ridesOfRider4}`)
// };

