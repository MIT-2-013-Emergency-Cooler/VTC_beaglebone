#!/usr/bin/env node
const fs = require('fs');
var b = require('bonescript');
var leds = ['USR0', 'USR1', 'USR2', 'USR3'];
var i = 0;
var delay = 100;

console.log("Toggling LEDs:");
for(var x in leds) {
    b.pinMode(leds[x], b.OUTPUT);
    process.stdout.write("0");
}
ledOn();

function ledOn() {
    process.stdout.write("\x1b[" + (n(i)+1) + "G1");
    b.digitalWrite(leds[n(i)], b.HIGH);
    setTimeout(ledOff, delay);
}

function ledOff() {
    process.stdout.write("\x1b[" + (n(i)+1) + "G0");
    b.digitalWrite(leds[n(i)], b.LOW);
    i++; if(i >= 2*leds.length-2) i = 0;
    //i++; if(i > 3) i = 0;
    ledOn();
}

function n(i) {
    if(i >= leds.length) return 2*leds.length-i-2;
    else return i;
}


function standbyOperation() {
    // Three states, check display, TX/RX with controller, and measure T
    
    // Check display
    
    // TX/RX to controller
    
    // Measure temperatures and cache
    
}

function actionOperation() {
    // Three states, check user input, send command, verify controller command
    // User input GPIO
    b.pinMode('P8_19', b.INPUT);
}


// function someAsyncOperation(callback) {
//   // Assume this takes 95ms to complete
//   fs.readFile('/path/to/file', callback);
// }

// const timeoutScheduled = Date.now();

// setTimeout(() => {
//   const delay = Date.now() - timeoutScheduled;

//   console.log(`${delay}ms have passed since I was scheduled`);
// }, 100);

// // do someAsyncOperation which takes 95 ms to complete
// someAsyncOperation(() => {
//   const startCallback = Date.now();

//   // do something that will take 10ms...
//   while (Date.now() - startCallback < 10) {
//     // do nothing
//   }
// });