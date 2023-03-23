const w=10;

const color= w > 10 ?"blue":"red";//ternary operator

switch(color){
    case "blue":
        console.log("the color is blue");
        break;   
    case "red":
        console.log("the color is red");                        //switch statement
        break;
    default:
        console.log("the color is not red or blue");    
        break;     
}