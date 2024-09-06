// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.
const _ = require('lodash@4.17.4');


var username = "jonas"
var password = "1289212"
var secret  = Buffer.from('Javascript').toString('base64')

console.log(eval(secret))

const { exec } = require('child_process');
const userInput = 'ls'; 
exec(userInput, (error, stdout) => console.log(stdout)); // Inseguro: entrada do usuário pode ser um comando malicioso


var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
// here's an XSS:
unsafe_div.innerHTML = "Hello to you " + username;