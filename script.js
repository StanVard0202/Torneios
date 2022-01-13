var a = 1
var b=2
var c = [a,b]
show(c)
function show(c){
    var html=""

    html+="<button onclick='pageDanca()'>Dança</button>"
    html+="<h1>Futebol</h1>"

    var indiv = document.getElementById("div1")
    indiv.innerHTML = html
}

function pageDanca(){

}

