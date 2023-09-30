var a=[];
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");

var b=parseInt(prompt("enter the number for unique value"));
document.write("given array is="+b+"<br>");
var c=[];
for(let i=0;i<a.length;i++){
    var d=a[i]+b;
    c.push(d);
}
document.write(c);