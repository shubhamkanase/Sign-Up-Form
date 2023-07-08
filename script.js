const submit = document.querySelector("#signup-form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const pword = document.querySelector("#pword");
const cpword = document.querySelector("#cpword");

submit.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(pword.value != cpword.value){
        cpword.setCustomValidity("Passwords Don't Match");
        cpword.reportValidity();
        cpword.style.borderColor="red";  
        alert("password not match")
        

        // window.location.href="/second.html"
    }
    else{
        cpword.setCustomValidity(""); // Reset custom validity message
        cpword.style.borderColor = ""; 
        cpword.reportValidity(); // Update the validity state
        
        if (cpword.checkValidity()) {
            alert("Successfully registered");
            window.location.href = "/second.html";
        // alert("succefully nregister")
        }
    }
})

// pword.onchange = validatePassword;
// cpword.onkeyup = validatePassword;