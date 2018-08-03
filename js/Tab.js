function $(id){
    return typeof id === "string"?document.getElementById(id):null;
}

var allLis = $("head").getElementsByTagName("li");
var allDom = document.getElementsByClassName("dom");
/* console.log(allLis);
console.log(allDom); */

for(var i = 0; i<allLis.length;i++){
    var li = allLis[i];
    li.index = i;
    allLis[i].onmouseover = function(){
        for(var j = 0; j<allLis.length; j++){
            allLis[j].className = '';
            allDom[j].style.display = "none";
        }

        allLis[this.index].className = "selected";
        allDom[this.index].style.display = "block";
    }
}