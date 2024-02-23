const form = document.getElementById('Form');
const nameInput = document.getElementById('fullName');
const numberInput = document.getElementById('number');
const emailInput = document.getElementById('email');
const detailsInput = document.getElementById('details'); 
const invalidName = document.getElementById('invalidName');
const invalidNumber = document.getElementById('invalidNumber');
const invalidEmail = document.getElementById('invalidEmail');
const invalidDetails = document.getElementById('invalidDetails');
const invalidRadio = document.getElementById('invalidRadio');
Form.addEventListener('submit', function(event) {
    event.preventDefault();   
    let errorText = false;    
    // Check name input
    const nameRegex = /[^a-zA-Z]/;
    if (nameInput.value.trim() === '') {
        invalidName.innerHTML = '&#9888; This question is required';
        invalidName.style.color = 'white';
        errorText = true;
    }else if(nameRegex.test(nameInput.value.trim())){
        invalidName.innerHTML = 'Please enter a valid name.';
        invalidName.style.color = 'white';
        errorText = true;
    } else {
        invalidName.innerHTML = '';
    }

    // Check details input
    if (detailsInput.value.trim() === '') {
        invalidDetails.innerHTML = '&#9888; This question is required';
        invalidDetails.style.color = 'white';
        errorText = true;
    } else {
        invalidDetails.innerHTML = '';
    }      
    
    // Check email input
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (emailInput.value.trim() === '') {
      invalidEmail.innerHTML = '&#9888; This question is required';
      invalidEmail.style.color = 'white';
      errorText = true;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        invalidEmail.innerHTML = 'Please enter a valid email address';
        invalidEmail.style.color = 'white';
        errorText = true;
    } else {
        invalidEmail.innerHTML = '';
    }
    
    // check phone number input   
    const phoneNumberRegex = /^\+[1-9]\d{1,14}$/;
    const phoneNumberRegex2 = /^[0-9]{10}$/;
    if (numberInput.value.trim() === '') {
        invalidNumber.innerHTML = '&#9888; This question is required';
        invalidNumber.style.color = 'white';
        errorText = true;
    } else if (!(phoneNumberRegex.test(numberInput.value.trim())||phoneNumberRegex2.test(numberInput.value.trim()))) {
        invalidNumber.innerHTML = 'Please enter a valid phone number';
        invalidNumber.style.color = 'white';
        errorText = true;
    } else {
        invalidNumber.innerHTML = '';
    }    

    // check ratings input
    const ratings = document.getElementsByName("rating");
    let isChecked = false;
    for (var i = 0; i < ratings.length; i++) {
        if (ratings[i].checked) {
          isChecked = true;
          break;
        }
    }
    if (!isChecked) {    
        invalidRadio.innerHTML='&#9888; This question is required';
        invalidRadio.style.color = 'white';
        errorText=true;
    } else {    
        invalidRadio.innerHTML='';
    }  
    
    
    // If all inputs are valid, submit the form
    if (!(errorText)) {
      Form.submit();
      thankYouMessage.style.display = 'block';
    }
  });
  