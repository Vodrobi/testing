let userInput = document.getElementById('uname');
userInput.addEventListener('keyup',()=>{
    var numbers = /[0-9]/g;//only numbers
    var space = /\s/g;//check for space
    var emp = /^\s*$/;
    var uI = userInput.value;
    if(uI.match(numbers)){
        document.getElementById('err_msg').style.display = 'block';
        document.getElementById('err_msg').textContent = '**username contain invalid character**';
    }
    else if(uI.match(space)){
        document.getElementById('err_msg').style.display = 'block';
        document.getElementById('err_msg').textContent = '**Space is not allowed**';
    }
    else if(uI.match(emp)){
        document.getElementById('err_msg').style.display = 'block';
        document.getElementById('err_msg').textContent = '**Enter your username**';
    }
    else{
        document.getElementById('err_msg').style.display = 'none';
    }
});