const submit = document.querySelector("#signup-form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const pword = document.querySelector("#pword");
const cpword = document.querySelector("#cpword");

submit.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(pword.value !== cpword.value){
        cpword.setCustomValidity("Passwords Don't Match");
        cpword.reportValidity();
        cpword.style.borderColor="red";
        alert("password not match")
        
    }
    else{
        cpword.setCustomValidity(""); // Reset custom validity message
        cpword.style.borderColor = ""; 
        cpword.reportValidity(); // Update the validity state
        alert("Succefully Submitted")
        window.location.href = "/second.html";
        
    }
})


cpword.addEventListener('input', () => {
    if (pword.value === cpword.value) {
        cpword.setCustomValidity("");
        cpword.style.borderColor = "green";
    } else {
        cpword.setCustomValidity("Passwords don't match");
        cpword.style.borderColor = "red";
    }
});
