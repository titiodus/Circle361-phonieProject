import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 

// Declaring the variables
const mtnPrefix = ['07025', '07026', '0703', '0704', '0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906']
const airtelPrefix = ['0701', '0708', '0802', '0808', '0812', '0901', '0907']
const gloPrefix = ['0705', '0805', '0807', '0815', '0811', '0905']
const nineMobilePrefix = ['0809', '0818', '0817', '0908', '0909']


// DOM MANIPULATION
const phoneNumber = document.getElementById("phoneNumber")
const form = document.getElementById("myForm")
let changeLogo = document.getElementById("phone-icon")

// // Setting THE NETWORK FUNCTIONS
function mtn(input) {
  let networkCode = extractCode(input)
    for(let i=0; i < mtnPrefix.length; i++) {
      if(networkCode === mtnPrefix[i]) {
        return true
      } 
    }
}
        
function airtel(input) {
  let networkCode = extractCode(input)
    for(let i=0; i < airtelPrefix.length; i++) {
      if(networkCode === airtelPrefix[i]) {
        return true
      } 
    }
}


function glo(input) {
  let networkCode = extractCode(input)
    for(let i=0; i < gloPrefix.length; i++) {
      if(networkCode === gloPrefix[i]) {
        return true
      } 
    }
}

function nineMobile(input) {
  let networkCode = extractCode(input)
    for(let i=0; i < nineMobilePrefix.length; i++) {
      if(networkCode === nineMobilePrefix[i]) {
        return true
      }
    }
}


// // DECLARING THE COMPARE FUNCTION
function compareNumber(input) {
  if (mtn(input)){
    changeLogo.src = "images/MTN-logo.png"
  } else if (airtel(input)){
    changeLogo.src = "images/Airtel.jpg"
  } else if(glo(input)){
    changeLogo.src = "images/glo-logo.png"
  }else if(nineMobile(input)){
    changeLogo.src = "images/9mobile-logo.png"
  } else{
    changeLogo.src = "images/mobile-phone.png"
  }
}


function resetFunction () {
  changeLogo.src = "images/mobile-phone.png"
  form.reset()
}


function extractCode(input){
  if (input.length < 11 || input.length > 11){
        return false
      } 
  else{
        return input.slice(0,4)
    }
}

// ADDING THE EVENT LISTENER
phoneNumber.addEventListener("keyup", function(event){
  let input = event.target.value
  extractCode(input)
  compareNumber(input)
})
