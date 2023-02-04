function display(newValue){
    document.getElementById("outputScreen").value += newValue;
}
function calculat(){
    var a = document.getElementById('outputScreen').value;
    var b = eval(a);
    document.getElementById('outputScreen').value = b;
}
function Clear(){
    document.getElementById('outputScreen').value = "";
}
function del(){
    var x = document.getElementById('outputScreen').value;
    var y = x.slice(0,-1);
    document.getElementById('outputScreen').value = y ;
}