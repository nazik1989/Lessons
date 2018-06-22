
function qarakusayin() {
var a= document.getElementById("aTiv").value;
var b= document.getElementById("bTiv").value;
var c= document.getElementById("cTiv").value;
var hav=a+"x<sup>2</sup>"+"+"+b+"x"+"+"+c;
var determ=b**2-4*a*c;
var x1=(-b+Math.sqrt(determ))/2;
var x2=(-b-Math.sqrt(determ))/2;
if(determ>=0){document.write(hav+" քառակուսային հավասարման դետերմինանտը՝ "
+"<br>"+"D = "+ determ + " ,իսկ արմատներն են` "+
"<br>"+"x<sub>1</sub>="+x1+"<br>"+"x<sub>2</sub>="+x2);}
else{document.write(hav+" քառակուսային հավասարումը արմատներ չունի ");}

}

