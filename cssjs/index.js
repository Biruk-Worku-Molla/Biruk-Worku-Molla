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
    
    let firstName = allLetter(first);
    let secondName = allLetter(last);
    let emailRes = ValidateEmail(email);

    if (firstName===false){
        return true
    };

    if (secondName===false){
        return true
    };

    if (emailRes===false){
        return true
    };
    
    if (firstName && secondName && emailRes){
        alert("Feedback Sent Successfully");
    }

    
    
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



