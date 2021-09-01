"use strict";
const prompt = require('prompt-sync')();
const atm = require('./atm'); //import of atm to index
//calling start function to start atm menu
start();

function start(){
    let bank = "Navy Federal Credit Union";
    console.log(`welcome to ${bank}!!`);
    atm.pinVerify();
}

function menu(){
    console.log("what would you like to do? /n 1: Balance /n 2: Withdraw 3: Deposit");
    let user = prompt();
    switch(user){
        case "1":
            atm.balance();
            break;
        case "2":
            atm.withdrawing();
            break;
        case "3":
            atm.deposit();
    }
}

