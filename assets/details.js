function validate()
{
    var email = document.getElementById("email").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("fname").value;
    var subject = document.getElementById("fname").value;


    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email =='')
    {
        alert("please enter email.");
    }
    else if(fname=='')
    {
        alert("enter the first name");
    }
    else if(lname=='')
    {
        alert("enter the last name");
    }
    else if(subject=='')
    {
        alert("enter the address");
    }
    else if(!filter.test(email))
    {
        alert("Enter valid email id.");
    }

    else
    {
alert('Login successful');

    }
}
