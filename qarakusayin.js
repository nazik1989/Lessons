
function qarakusayin(a,b,c)
{var hav=a+"x^2"+"+"+b+"x"+"+"+c;
var determ=b**2-4*a*c;
var x1=(-b+Math.sqrt(determ))/2;
var x2=(-b-Math.sqrt(determ))/2;
if(determ>=0){document.write(hav+" քառակուսային հավասարման դետերմինանտը՝ "
+"<br>"+"D = "+ determ + " ,իսկ արմատներն են` "+
"<br>"+"x1="+x1+"<br>"+"x2="+x2);}
else{document.write(hav+" քառակուսային հավասարումը արմատներ չունի ");}

}
qarakusayin(2,5,16)
