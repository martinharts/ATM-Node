"use strict";

const prompt = require('prompt-sync')();// prompt-synce implementation
const account = require('./account'); //import from account
//get balance function displays balance of account
function getBalance(){
    console.log("Your account balance is" + " " + account.balance);
}
// function to verify pin of account
function verifyPin(){
    let user = prompt("Enter Pin Number");
    if(user === account.pin){
        console.log("Correct pin!");
    }
    else if(user != account.pin){
        console.log("Incorrect pin! Try again!");
        verifyPin(user);
    }
}
//function to allow user to deposit into account
function deposit(){
    console.log("Enter amount that you would like to deposit");
    let deposit = prompt();
    account.balance = account.balance + parseInt(deposit);
    console.log(`Your new balance is ${account.balance}`);
}
//function to allow user to withdraw from account
function withdraw(){
    console.log("Enter the amount that you would like to withdraw in multiples of 20");
    let take = prompt();
    if(account.balance >= take){
       account.balance = account.balance - parseInt(take);
        console.log(`this is your withdrawn amount ${take}, your account balance is now ${account.balance}`);
    }
    else if(account.balance < take){
        console.log("Insufficient funds");
    }
}

//export of functions 
module.exports = {
    pinVerify: verifyPin,
    balance: getBalance,
    withdrawing: withdraw,
    deposit: deposit,
}