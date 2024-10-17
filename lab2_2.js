var month="January";
var output;
switch(month){
    case "January":
    case "February":
    case "December":
    case "November":
        output="Winter"
        break;
    case "March":
    case "April":
    case "May":
    case "June":
        output="Summer"
        break;
    case "July":
    case "August":
    case "September":
    case "October":
        output="Monsoon"
        break;         
}
console.log(output)