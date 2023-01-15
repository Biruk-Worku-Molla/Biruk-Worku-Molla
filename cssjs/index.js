function openMenu(){
    let ele = document.getElementsByClassName('navigation--mobile')[0];
    ele.style.right = '0';
}

function closeMenu(){
    let ele = document.getElementsByClassName('navigation--mobile')[0];

    ele.style.right = '-100%';
}


// ############# Validation ###################

function validate(){
    let email = document.getElementById('email');
    let first = document.getElementById('first-name');
    let last = document.getElementById('last-name');

    if (allLetter(first)===false){
        return true
    };

    if (allLetter(last)===false){
        return true
    };

    if (ValidateEmail(email)===false){
        return true
    };

    
    
}


function allLetter(name){

    var letters = /^[A-Za-z]+$/;

    if(name.value.match(letters)){
          return true;
        }
    
    else{
        alert("Name not valid");
        name.focus();
        return false;
    }
    


}




function ValidateEmail(email){

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.value.match(mailformat)){
    return true;
    }

    else{
        
        alert('Email is invalid');
        email.focus();
        return false;

    }

}



