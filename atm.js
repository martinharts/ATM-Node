"use strict";

const prompt = require('prompt-sync')();// prompt-synce implementation
const account = require('./account'); //import from account

function getBalance(){
    console.log("Your account balance is" + " " + account.balance)
}

function verifyPin(){
    let user = prompt("Enter Pin Number")
    if(user === account.pin){
        console.log("Correct pin!")
    }
    else if(user != account.pin){
        console.log("Incorrect pin! Try again!")
        verifyPin(user)
    }
}

function deposit(){
    console.log("Enter amount that you would like to deposit");
    let deposit = prompt();
    let newBalance = account.balance + parseInt(deposit);
    console.log(`Your new balance is ${newBalance}`);
}

function withdraw(){
    console.log("Enter the amount that you would like to withdraw in multiples of 20");
    let take = prompt();
    if(account.balance >= take){
        newBalance = account.balance - take;
        console.log(`this is your withdrawn amount ${take}, your account balance is now ${newBalance}`);
    }
    else if(account.balance < take){
        console.log("Insufficient funds")
    }
}


module.exports = {
    pinVerify: verifyPin,
    balance: getBalance,
    withdrawing: withdraw,
    deposit: deposit,
}