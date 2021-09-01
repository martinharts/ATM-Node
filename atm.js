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
    
}