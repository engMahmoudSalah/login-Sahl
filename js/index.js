
const themeToggler = document.querySelector(".toggle-theme");
const body = document.body;



//change theme
themeToggler.addEventListener('click', () => {

    body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('button:nth-child(1)').
    classList.toggle('active');

    themeToggler.querySelector('button:nth-child(2)').
    classList.toggle('active');
})



// validate Phone Number
function validateNumber() {
  const numberInput = document.getElementById('numberInput');
  const done = document.getElementsByClassName('done')[0];
  const message  = document.getElementById('dangerNum');
  var isValid = true;

  if (numberInput.value.length == 0) {
    isValid = false;
    message.innerHTML = `<p>يجب ملأ هذه الخانة </p> <i class="fa fas fa-exclamation-circle" ></i>` ;
    numberInput.style.border = '1px solid #384CDF';
    return;
  } 

  if (!/^[0-9]{11,11}$/.test(numberInput.value.trim())) {
    isValid = false;
    message.innerHTML = `<p> رقم الهاتف الذي يتكون من 11 رقم </p> <i class="fa fas fa-exclamation-circle" ></i>`;
    numberInput.style.border = '1px solid red';
    done.style.display="none";
    return;
  } 
  
  if (isValid){
    message.innerHTML = '';
    numberInput.style.border = '1px solid green';
    done.style.display="block";

  }

}



//======// new // ======//



// validaton password checker //<---
function validatePassword() {
  const eyeIcon = document.getElementById('eyeIcon');
  const done = document.getElementsByClassName('done')[1];
  var password = document.getElementById('passwordInput');
  var message = document.getElementById('dangerPass');
  var isValid = true;

  if (password.value.length == 0) {
    isValid = false;
    message.innerHTML = `<p>يجب ملأ هذه الخانة </p> <i class="fa fas fa-exclamation-circle" ></i>` ;
    password.style.border = '1px solid #384CDF';
    return;
  }

  // Validate length
  if (password.value.length < 6) {
    isValid = false;
    message.innerHTML = `<p>كلمة المرور اقل من 6 </p> <i class="fa fas fa-exclamation-circle" ></i>`;
    eyeIcon.style.display = 'block';  
    password.style.border = '1px solid red';
    done.style.display="none";
    return;
  }

  // Validate if it contains at least one uppercase letter
  if (!/[A-Z]/.test(password.value.trim())) {
    isValid = false;
    message.innerHTML = `<p>يجب ان تحتوي علي احرف كبيرة</p> <i class="fa fas fa-exclamation-circle" ></i>`;
    eyeIcon.style.display = 'block';  
    password.style.border = '1px solid red';
    done.style.display="none";
    return;
  }

  // Validate if it contains at least one lowercase letter
  if (!/[a-z]/.test(password.value.trim())) {
    isValid = false;
    message.innerHTML = `<p>يجب ان تحتوي علي احرف صغيرة</p> <i class="fa fas fa-exclamation-circle" ></i>` ;
    eyeIcon.style.display = 'block';  
    password.style.border = '1px solid red';
    done.style.display="none";
    return;
  }

  // Validate if it contains at least one digit
  if (!/\d/.test(password.value.trim())) {
    isValid = false;
    message.innerHTML = `<p>يجب ان تحتوي علي رقم علي الاقل</p> <i class="fa fas fa-exclamation-circle" ></i>`;
    eyeIcon.style.display = 'block';  
    password.style.border = '1px solid red';
    done.style.display="none";
    return;
  }

  // Validate if it contains at least one special character
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password.value.trim())) {
    isValid = false;
    message.innerHTML = `<p>يجب وضع احدي العلامات الخاصه. </p> <i class="fa fas fa-exclamation-circle" ></i>`;
    eyeIcon.style.display = 'block';  
    password.style.border = '1px solid red';
    done.style.display="none";

    return;
  }

  // If all validations pass
  if (isValid) {
    message.innerHTML = '';
    eyeIcon.style.display = 'none';  
    password.style.border = '1px solid green';
    done.style.display="block";
  }
}




// =========/ Conferm Password ==============

function confermPassword(){
  const password = document.getElementById('passwordInput');
  const eyeIcon = document.getElementById('confermEyeIcon');
  const done = document.getElementsByClassName('done')[2];
  const confermPasswordInput = document.getElementById('confermPasswordInput');
  var message = document.getElementById('dangerPassConferm');

  

  if (confermPasswordInput.value.trim() != password.value.trim()){

    message.innerHTML = `<p>كلمة المرور غير متطابقة. </p> <i class="fa fas fa-exclamation-circle" ></i>`;
    eyeIcon.style.display = 'block';  
    confermPasswordInput.style.border = '1px solid red';
    done.style.display="none";
    
  }
  else{
    confermPasswordInput.style.border = '1px solid green';
    message.innerHTML = ``;
    eyeIcon.style.display = 'none';  
    confermPasswordInput.style.border = '1px solid green';
    done.style.display="block";
  }

}


function togglePasswordVisibility() {
  const passwordInput = document.getElementById('passwordInput');
  const eyeIcon = document.getElementById('eyeIcon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}



function toggleConfermPasswordVisibility() {
  const passwordInput = document.getElementById('confermPasswordInput');
  const eyeIcon = document.getElementById('eyeIcon');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}





// ==============/ dropdown minu home /================

// JavaScript to handle the dropdown functionality
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
  const button = dropdown.querySelector('.dropdown-btn');
  const content = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', function() {
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});

// Close the dropdown when clicking outside of it
window.addEventListener('click', function(event) {
  dropdowns.forEach(function(dropdown) {
    if (!dropdown.contains(event.target)) {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    }
  });
});
