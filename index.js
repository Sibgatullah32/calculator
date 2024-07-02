function button(digit){
    var result = document.getElementById("result");
    result.value+=digit;
}
function calcuat(){
    var calcuat = document.getElementById('result').value;
    var evall = eval(calcuat);
    document.getElementById('result').value=evall;
}
function clr(){
    document.getElementById('result').value="";
}