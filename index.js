'use strict';

    //get value from input
    //make a number
    //check if a number
    //check if between 1-50
    //throw error if not either of above
    //return val to print dog pics
function validateForm() {
   const userNum = parseInt($('.js-input').val());
   console.log(userNum);
   if(userNum === NaN) {
       throw new Error("Please enter a number");
   } else if(userNum < 1) {
       throw new Error("Please enter a number between 1 and 50");
   } else if(userNum > 50) {
    throw new Error("Please enter a number between 1 and 50");
   } else {
       return userNum;

   }
}

function getDogImage(userNum = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
        .then(response => response.json())
        .then(responseJson => displayDogImages(responseJson))
        .catch(error => alert('Something went wrong. Try again later'));
}

function displayDogImages(responseJson) {
    console.log(responseJson);  
    
}


function clickSumbit() {
    $('form').submit(event => {
        event.preventDefault();
        validateForm();
        getDogImage();
    });
}

$(function() {
    console.log('App loaded');
    clickSumbit();
});