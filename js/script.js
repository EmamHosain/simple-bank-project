

document.getElementById('input_btn').addEventListener('click',function(){
    const input_field = document.getElementById('input_field');
    const input_pass = document.getElementById('input_password');

    const getValue_input = input_field.value;
    const getValue_pass = input_pass.value;
    if(getValue_input === ''){
        alert('Enter Your Email Please');
    }
    else if(getValue_pass === ''){
        alert('Enter Your Password Please');
    }
   else if((getValue_input === 'hossainemam12345@gmail.com') && (getValue_pass === '12345'  )){
        window.location.href = 'bank.html';
    }
    else{
        console.log('invalid password');
    }

    
})  



