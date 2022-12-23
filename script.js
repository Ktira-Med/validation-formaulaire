
function validate(){
    
    var testusername=false;
    var testpassword=false;
    var testemail=false;
    var username = document.getElementById("username").value.toString();
    
    var l1 = username.charAt(0);
    
    var lM = l1.toUpperCase();
    
    var test=false;
    if(l1 === lM){
        
        test=true;
    }
    if(test==false || username=="")
    {
    document.getElementById("v_username").style.visibility="visible";
    }
    else{
        testusername=true;
        document.getElementById("v_username").style.visibility="hidden";
    }
   
   
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    var pass = document.getElementById("pass").value.toString();
    
     var testnumber = /\d/.test(pass);
     
    var testm = false;
    let lenghtofpassword= pass.length;
    let p=0;
    

    while ( p < lenghtofpassword && testm== false)
    {
        
        var l2 = pass.charAt(p);
        
        var LM = l2.toUpperCase();
       
       
        if( (l2 == LM) && (/\d/.test(l2)==false) && (specialChars.test(l2)==false) && (l2!=" ")){
           
            testm = true;
            
        }
        p++;
    }
    
    if(lenghtofpassword<8 || testm==false||testnumber==false)
    {
        document.getElementById("v_password").style.visibility="visible";
    }
    else{
        testpassword=true;
        document.getElementById("v_password").style.visibility="hidden";
    }
     // check string contains @ or .
     var email=document.getElementById("email").value.toString();
     if(!(email.includes("@")) || !(email.includes("."))|| email=="") 
     {
        document.getElementById("v_email").style.visibility="visible";
    }
    else{
        testemail=true;
        document.getElementById("v_email").style.visibility="hidden";
    }
     
    if(testusername==true && testpassword==true && testemail==true)
    {
        
        document.getElementById("message").style.display="block";

        document.getElementById("form").style.display="none";
    }
    else
    {
        document.getElementById("message").style.display="none";
        
    }

    document.getElementById("username").value="";
    document.getElementById("pass").value="";
    document.getElementById("email").value="";

    }
   
