// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.



var username = "jonas"
var password = "1289212"

const _ = require('lodash@4.17.4');
const { exec } = require('child_process');
const userInput = 'ls'; 
exec(userInput, (error, stdout) => console.log(stdout)); // Inseguro: entrada do usuário

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
// here's an XSS:
unsafe_div.innerHTML = "Hello to you " + username;