function getValues(){

    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    if(num1==="" || num2===""){
        alert("Please enter both numbers.");
        return null;
    }

    return{
        num1:Number(num1),
        num2:Number(num2)
    };

}

function addition(){

    let value=getValues();

    if(value==null) return;

    let result=value.num1+value.num2;

    document.getElementById("result").innerHTML=
    "Result : "+result;

}

function subtraction(){

    let value=getValues();

    if(value==null) return;

    let result=value.num1-value.num2;

    document.getElementById("result").innerHTML=
    "Result : "+result;

}

function multiplication(){

    let value=getValues();

    if(value==null) return;

    let result=value.num1*value.num2;

    document.getElementById("result").innerHTML=
    "Result : "+result;

}

function division(){

    let value=getValues();

    if(value==null) return;

    if(value.num2==0){

        document.getElementById("result").innerHTML=
        "Result : Cannot divide by zero";

    }
    else{

        let result=value.num1/value.num2;

        document.getElementById("result").innerHTML=
        "Result : "+result;

    }

}

function squareRoot(){

    let num=document.getElementById("num1").value;

    if(num===""){
        alert("Enter First Number");
        return;
    }

    num=Number(num);

    if(num<0){

        document.getElementById("result").innerHTML=
        "Result : Square root not possible";

    }
    else{

        let result=Math.sqrt(num);

        document.getElementById("result").innerHTML=
        "Result : "+result;

    }

}

function cubeRoot(){

    let num=document.getElementById("num1").value;

    if(num===""){
        alert("Enter First Number");
        return;
    }

    num=Number(num);

    let result=Math.cbrt(num);

    document.getElementById("result").innerHTML=
    "Result : "+result;

}

function power(){

    let value=getValues();

    if(value==null) return;

    let result=Math.pow(value.num1,value.num2);

    document.getElementById("result").innerHTML=
    "Result : "+result;

}

function clearFields(){

    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("result").innerHTML="Result :";

}