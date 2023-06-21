function checkFunction()
{
    var a = document.getElementById("inputone").value
    var b = document.getElementById("inputtwo").value
    var c = document.getElementById("inputthree").value

    if(a>0 && b>0 && c>0)
    {
    var d = (a%10==b%10 && b%10==c%10 && a%10==c%10);
    document.getElementById("outputnumber").innerHTML = d;
    if(d == true)
    {
        alert("Last digit of given numbers are same");
    }
    else
    {
        alert("Last digit of given numbers are not same");
    }
    }
}