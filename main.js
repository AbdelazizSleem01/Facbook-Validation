for (let i = 1; i <= 30; i++) {
    let option = document.createElement("option");
    option.text = i;
    option.value = i;
    document.getElementById("number-select").appendChild(option);
}


  const months = ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 0; i < months.length; i++) {
    let option = document.createElement("option");
    option.text = months[i];
    option.value = i + 6; 
    document.getElementById("month-select").appendChild(option);
}

for (let year = 2024; year >= 1905; year--) {
    let option = document.createElement("option");
    option.text = year;
    option.value = year;
    document.getElementById("year-select").appendChild(option);
}

function formValidate(){

    const  userName = document.getElementById("first-name").value;
    const yourEmail = document.getElementById("email").value;
    const surName =   document.getElementById("sur-name").value;
    const password =   document.getElementById("pass").value;
    let text;
    
    if(userName.length === 0){
        text = " please enter valiad firstname";
        validation.innerHTML = text;
        document.getElementById("first-name").style.borderColor="red";
        return false;   
    }
        
    if (surName.length === 0 ){
        text = " please enter valiad surname";
        document.getElementById("validation1").innerHTML=text;
        document.getElementById("validation").style.visibility="hidden"; 
        document.getElementById("sur-name").style.borderColor="red";
        document.getElementById("first-name").style.borderColor="grey";
   
    }
    else if (  yourEmail.indexOf("@") == -1 || yourEmail.length === 0  ){
        text = " please enter valiad Email" 
        document.getElementById("validation2").innerHTML=text;
        document.getElementById("validation2").style.visibility="visible";
        document.getElementById("validation1").style.visibility="hidden";
        document.getElementById("validation").style.visibility="hidden";
        document.getElementById("email").style.borderColor="red";
        document.getElementById("first-name").style.borderColor="grey";
        document.getElementById("sur-name").style.borderColor="grey";


    }
    else if ( password.length === 0 ){
        text = " please enter valiad pass"
        document.getElementById("validation3").innerHTML=text;
        document.getElementById("validation3").style.visibility="visible";
        document.getElementById("validation1").style.visibility="hidden";
        document.getElementById("validation").style.visibility="hidden";
        document.getElementById("validation2").style.visibility="hidden";
        document.getElementById("pass").style.borderColor="red";
        document.getElementById("first-name").style.borderColor="grey";
        document.getElementById("sur-name").style.borderColor="grey";
        document.getElementById("email").style.borderColor="grey";


    }
    else {
        alert("sidn up is complete");
        return true;
    }
}

function closebtn(){

    document.getElementById("close-btn").style.visibility = "hidden";
    document.getElementById("id01").style.visibility = "hidden";
}


function myFunction(){
    const emailPhone = document.getElementById("email-phone").value;
    const PASS= document.getElementById("passworda").value;

    let text;
    if(emailPhone.indexOf("@") == -1 ||  emailPhone.length === 0){
        text = '"the email or phone incorrect"';
        document.getElementById("validation4").innerHTML=text;
        document.getElementById("email-phone").style.borderColor="red";



    }
    else if ( PASS|| PASS.length === 0){
        text = '"the password incorrect"';
        document.getElementById("validation5").innerHTML=text;
        document.getElementById("passworda").style.borderColor="red";
        document.getElementById("validation5").style.visibility="visible";
        document.getElementById("validation4").style.visibility="hidden";
        document.getElementById("email-phone").style.borderColor=" rgba(126, 123, 123, 0.219)";
    }
    else {
        document.getElementById("validation4").style.visibility="hidden";
        document.getElementById("validation5").style.visibility="hidden";
        document.getElementById("passworda").style.borderColor=" rgba(126, 123, 123, 0.219)";
        document.getElementById("email-phone").style.borderColor=" rgba(126, 123, 123, 0.219)";


        return true;
    }
}
