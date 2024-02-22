var form = document.getElementById("sheet-db");
form.addEventListener("submit", e =>{
    e.preventDefault();
    if(validation()){
        fetch(form.action,{
            method : "post",
            body : new FormData(document.getElementById("sheet-db"))
        }).then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error('Error:', error))
    }
});

function validation()
{
 var uname = document.getElementById("name").value;
 var unamep = /^[a-zA-Z]+$/;
 var uphone = document.getElementById("phone").value;
 var uphonep = /^[6-9][0-9]{9}$/;
 var uemail = document.getElementById("email").value;
 var uemailp = /^\S+@\S+\.\S+$/;
 var uage = document.getElementById("age").value;
 

 if(uname === "")
 {
    document.getElementById("msg").innerHTML="Enter username.";
    return false;
 }
 else if(!uname.match(unamep))
 {
    document.getElementById("msg").innerHTML="Usename should be in Alphabets.";
    return false;
 }
 else if(uname.length<3)
 {
    document.getElementById("msg").innerHTML="Username should be morethan 3 letters.";
    return false;
 }
 else if(uname.length>15)
 {
    document.getElementById("msg").innerHTML="Username should be lessthan 15 letters";
    return false;
 }
 else
 {
    document.getElementById("msg").innerHTML="";
 }

 if(uphone === " ")
 {
    document.getElementById("msg1").innerHTML="Enter Phone Number.";
    return false;
 }
 else if(!uphone.match(uphonep))
 {
    document.getElementById("msg1").innerHTML="Enter valid phone number.";
    return false;
 }
 else
 {
    document.getElementById("msg1").innerHTML="";
 }

 if(uemail === " ")
 {
    document.getElementById("msg2").innerHTML="Enter Emailid.";
    return false;
 }
 else if(!uemail.match(uemailp))
 {
    document.getElementById("msg2").innerHTML="Enter valid emailid.";
    return false;
 }
 else{
    document.getElementById("msg2").innerHTML="";
 }

 if(uage==="")
 {
    document.getElementById("msg3").innerHTML="Enter age.";
    return false;
 }
 else if(isNaN(uage) || uage<3 || uage>75)
 {
    document.getElementById("msg3").innerHTML="Age should be greater than 3 and less than 75.";
    return false;
 }
 else{
    document.getElementById("msg3").innerHTML="";
 }
 return true;
}

