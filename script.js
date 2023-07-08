const submit = document.querySelector("button");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const pword = document.querySelector("#pword");
const cpword = document.querySelector("#cpword");

submit.addEventListener('click', ()=> {
    if(pword.value != cpword.value){
        alert("password not match")
        // window.location.href="/second.html"
    }
    else{
        alert("succefully nregister")
        window.location.href="/second.html"
    }
  
    // alert("succefully nregister")
})