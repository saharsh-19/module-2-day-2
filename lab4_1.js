var ht,cs,jv;

  var name ="Saharsh";
    var studentid="Ent";
    var course="cs";
    var sem="4";
    ht=10;
    cs=97;
    jv=89;

var total, perc, grade;
function calc(num1,num2,num3)
{
    total=num1+num2+num3;
    perc=total/3;
    if(perc>=90){
        grade="A";
    }
    else if(perc<90 && perc>=80){
        grade="B";
    }
    else if(perc<80 && perc>=70){
        grade="C";
    }
    else{
        grade="Fail"
    }
}
function constraint(num){
    if(num<0||num>100)
    {
        return 0;
    }
    else
    {
        return 1;
    } 
}
function output(){
    console.log(` Name: ${name} \n Course: ${course} \n ID: ${studentid} \n Semester: ${sem} \n Total: ${total} \n Percentage: ${perc} \n Grade: ${grade}`)
}

if ((constraint(ht)+constraint(cs)+constraint(jv))!=3)
{
    console.log("Error in input");
}
else
{
    calc(ht,cs,jv);
    output();
}