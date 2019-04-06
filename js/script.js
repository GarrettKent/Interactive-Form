//This makes the focus turn to the 'Name' text field by default.
$(document).ready(function() {
    $('#name').focus();
});

/*** 
    Here I hid the text field for 'other' unless it was clicked on. I used a conditional statement
to show the text area only if 'other' was clicked on.  
***/   
$('#other-title').hide();
$('#title').on('click', function(e){
    if(this.value === 'other'){
        $('#other-title').show();
    } else{
        $('#other-title').hide();
    }
});

// This is to hide all color options to start off.
$('#colors-js-puns').hide();

/***
    I showed every color available for 'js puns' in my if statement, also I made cornflower blue the
 first option, while making sure tomato wouldn't be an option if I were to return from 'heart js'.
    Then, I showed the colors available for 'heart js' in my else if statement, while making tomato the
first choice. Then I made sure cornflower blue would not be an option if coming from 'js puns'.    
***/
$('#design').change(function(e) {
    if(this.value === 'js puns'){
        $('#colors-js-puns').show();
        $('#colors-js-puns option[value="cornflowerblue"]').show().attr('selected',true);
        $('#colors-js-puns option[value="darkslategrey"]').show();
        $('#colors-js-puns option[value="gold"]').show();
        $('#colors-js-puns option[value="tomato"]').hide().attr('selected',false);
        $('#colors-js-puns option[value="steelblue"]').hide();
        $('#colors-js-puns option[value="dimgrey"]').hide();
  } else if(this.value === 'heart js'){
        $('#colors-js-puns').show();
        $('#colors-js-puns option[value="tomato"]').show().attr('selected',true);
        $('#colors-js-puns option[value="steelblue"]').show();
        $('#colors-js-puns option[value="dimgrey"]').show();  
        $('#colors-js-puns option[value="cornflowerblue"]').hide().attr('selected',false);
        $('#colors-js-puns option[value="darkslategrey"]').hide();
        $('#colors-js-puns option[value="gold"]').hide();
 } else {
    $('#colors-js-puns').hide();
  }
});
//I created variables for each activity and for the class as a whole
const $activities = $('.activities'); 
const $jsFrameworks = $('input[name = "js-frameworks"]');
const $jsLibs = $('input[name = "js-libs"]');
const $express = $('input[name = "express"]');
const $node = $('input[name = "node"]');
/*** 
    I used an if-else statement for the activities that would overlap, making it so if one were clicked on,
the other one that occured at the same time could not be clicked on.
***/
$($jsLibs).change(function() {
    if ($(this).is(':checked')) {
    $node.prop('disabled', true)
  } else {
    $node.prop('disabled', false)
  }
});
$($node).change(function() {
    if ($(this).is(':checked')) {
    $jsLibs.prop('disabled', true)
  } else {
    $jsLibs.prop('disabled', false)
  }
});
$($express).change(function() {
    if ($(this).is(':checked')) {
    $jsFrameworks.prop('disabled', true)
  } else {
    $jsFrameworks.prop('disabled', false)
  }
});
$($jsFrameworks).change(function() {
    if ($(this).is(':checked')) {
    $express.prop('disabled', true)
  } else {
    $express.prop('disabled', false)
  }
});
/*** 
    I made the price total start at 0, then created a span in my new runningTotal variable in order to
hold the price after some activities were either selected or deselected. Lastly, I appended the variable to
the activities class.
***/
let total = 0;
const runningTotal = document.createElement('span');
$('.activities').append(runningTotal);
//I created this to let me add and subtract to the final amount.
$($activities).on('change', function (e) {
const checkbox = $(e.target).parent().text();
/*** 
    I made the variable 'amount' and made it equal to the last 3 characters in the checkbox html substring
Then, by using parseInt, I turned the last 3 characters into integers. I then made an if-else statement,
adding or subtracting the amount per checkbox depending if it is checked or not. Finally, I added it to
the app using innerHTML so the correct total would be shown to the page. 
***/
let amount = parseInt(checkbox.substring(checkbox.length - 3));
    if ($(e.target).is(':checked')) {
        total += amount;
}   else {
       total -= amount;
}
    runningTotal.innerHTML = 'Total:$' + total;
});
//I made 'credit card' the default option, then hid the 'select_method' from the dropdown menu.
$('select option[value="credit card"]').attr('selected',true); 
$('select option[value="select_method"]').hide();
//This hides the dialogue for Bitcoin and Paypal until they are chosen.
$('p').hide();
//I created a variable and made an if-else statement in my function to hide whichever isn't chosen.
$('#payment').on('change', function(e){
    let select = $(e.target).val();
//Since bitcoin and paypal both are not chosen, I just hid a 'p' tag since they both should be hidden.    
if (select === 'credit card') {
    $('#credit-card').show();
    $('p').hide();
//If choosing paypal, I would hide the credit card info and the bitcoin 'p' tag, which was the last one.   
} else if (select === 'paypal') {
    $('p').first().show();
    $('p').last().hide();
    $('#credit-card').hide();
//If choosing bitcoin, I would hide the credit card info and the paypal 'p' tag, which was the first one.    
} else if (select === 'bitcoin') {
    $('p').last().show();
    $('p').first().hide();
    $('#credit-card').hide();
}
});
/*** 
    I made it to where every field requires a specific amount of characters, then provided an alert
if those requirements are not met. Thanks to stack overflow.
    ***/
$('#name').on('blur', function(){
    if ( $(this).val().match('^[a-zA-Z]{3,16}$')){
    } else {
        $('#name').prev().text('Name: Please enter a correct name').show();
    }
});
$('#mail').on('blur', function(){
    if ( $(this).val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    } else {
        $('#mail').prev().text('Email: Please enter a correct email address').show();
    }
});
$('#cc-num').on('blur', function(){
    if ( $(this).val().match(/^[0-9]{13,16}$/)){
    } else {
        $('#cc-num').prev().text('Card Number: Please enter a correct credit card').show();
    }
});
$('#zip').on('blur', function(){
    if ( $(this).val().match(/^[0-9]{5,5}$/)){
    } else {
        $('#zip').prev().text('Zip: Please enter a correct zip').show();
    }
});
$('#cvv').on('blur', function(){
    if ( $(this).val().match(/^[0-9]{3,3}$/)){
    } else {
        $('#cvv').prev().text('CVV: Please enter a correct CVV').show();
    }
});
/*** 
  I ran a function where if no checkboxes were checked, a text would appear saying to select a checkbox.
If there is at least one checkbox selected,  no message would appear and everything would run normally.  
***/
function check () {
    if ($('input:checkbox:checked').length === 0) {
        $('.activities legend').text('Register for Activities: Select at least 1 activity');
        return false;
    } 
}
$('.activities').change(check);
$('form').on('submit', function(event) {
    let error = false;
//13-16 digits must be selected in order for the page to be submitted   
    if($('#payment option:selected').val() === 'credit card'){
        if(!$('#cc-num').val().match(/^[0-9]{13,16}$/)) {
            $('#cc-num').prev().text('Card Number: Please enter a correct credit card');
            error = true;
        } else{
            $('#cc-num').prev().text('Card Number:')
        }
// Five digits have to be entered for the zip code before the page can be submitted        
        if(!$('#zip').val().match(/^[0-9]{5,5}$/)) {
            $('#zip').prev().text('Zip Code: Please enter a correct Zip Code');
            error = true;
        } else{
            $('#zip').prev().text('Zip Code:');
        }
// Three digits have to be shown or the page will not refresh when register is hit
        if(!$('#cvv').val().match(/^[0-9]{3,3}$/)) {
            $('#cvv').prev().text('CVV: Please enter a correct CVV');
            error = true;
        } else{
            $('#cvv').prev().text('CVV:');
        }    
     }
//At least one box will be checked for the page to be submitted
     if( $('.activities input:checked').length === 0){
       $('.activities').prev().text('Register for Activities: Please select at least 1 box');
        error = true;
     } else{
         $('.activities').prev().text('Register for Activites');
     }

     if(!$('#mail').val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $('#mail').prev().text('Email: Please enter a correct Email');
        error = true; 
     } else{
        $('#mail').prev().text('Email:');
     }

     if(error){
        event.preventDefault();
     }
});