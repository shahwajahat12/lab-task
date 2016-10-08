var name = prompt("Enter Your Name:");
var fname= prompt("Enter your Father name:");
var html= parseFloat(prompt("Enter yours marks of html test"));
var ss1=  parseFloat(prompt("Enter Yours css-test 1:"));
var ss2=  parseFloat(prompt("Enter your marks of css-test 2"));
var avg = (ss1+ss2+html)/3;
document.getElementById("name").innerHTML=name;
document.getElementById("fname").innerHTML=fname;
document.getElementById("html").innerHTML=html;
document.getElementById("css1").innerHTML=ss1;
document.getElementById("css2").innerHTML=ss2;
document.getElementById("avg").innerHTML=avg;

if(avg>=90 && avg<100)
{
    document.getElementById("html").innerHTML=html + " " + "Your grade is A+";
}

else if(avg>=80 && avg<90)
{
    document.getElementById("html").innerHTML=html  + " " + "Your grade is A";
}
 else if(avg>=70 && avg<80)
{
    document.getElementById("html").innerHTML=html + " " + "Your grade is B";
}
else if(avg>=60 && avg<70)
{
    document.getElementById("html").innerHTML=html + " " + "Your grade is C";
}
 else if(avg <60)
 {
     document.getElementById("html").innerHTML=html + " " + "Your grade is FAil "
 }

 if(avg>=90 && avg<100)
{
    document.getElementById("css1").innerHTML=ss1 + " " + "Your grade is A+";
}

else if(avg>=80 && avg<90)
{
    document.getElementById("css1").innerHTML=ss1 + " " + "Your grade is A";
}
 else if(avg>=70 && avg<80)
{
    document.getElementById("css1").innerHTML=ss1 + " " + "Your grade is B";
}
else if(avg>=60 && avg<70)
{
    document.getElementById("css1").innerHTML=ss1 + " " + "Your grade is C";
}
 else if(avg <60)
 {
     document.getElementById("css1").innerHTML=ss1 + " " + "Your grade is FAil "
 }

 if(avg>=90 && avg<100)
{
    document.getElementById("css2").innerHTML=ss2 + " " + "Your grade is A+";
}

else if(avg>=80 && avg<90)
{
    document.getElementById("css2").innerHTML=ss2 + " " + "Your grade is A";
}
 else if(avg>=70 && avg<80)
{
    document.getElementById("css2").innerHTML=ss2 + " " + "Your grade is B";
}
else if(avg>=60 && avg<70)
{
    document.getElementById("css2").innerHTML=ss2 + " " + "Your grade is C";
}
 else if(avg <60)
 {
     document.getElementById("css2").innerHTML=ss2 + " " + "Your grade is FAil "
 }