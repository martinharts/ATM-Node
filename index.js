"use strict";
const prompt = require('prompt-sync')();
const atm = require('./atm'); //import of atm to index
//calling start function to start atm menu
start();
//start function wtih welcome message
function start(){
    let bank = "Navy Federal Credit Union";
    console.log(`welcome to ${bank}!!`);
    atm.pinVerify();
    menu();
}



//menu function with switch case
function menu(){
     console.log("what would you like to do? \n 1: Balance \n 2: Withdraw \n 3: Deposit \n 4: Exit");
     let user = prompt();
     switch(user){
        case "1":
            atm.balance();
            menu();
            break;
        case "2":
            atm.withdrawing();
            menu();
            break;
        case "3":
            atm.deposit();
            menu();
            break;
        case "4":
            exit();
            break;
            default:
            menu();4
       }
}
//exit function called in menu function switch case
function exit(){
    console.log("Now exiting.. \nHave a nice Day!")
}

// do{
//     menu();
//     let userInput = prompt('Main menu? \n Y/N')
// }while(userInput != n)
