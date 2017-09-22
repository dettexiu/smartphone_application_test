// This is a JavaScript file

var data=Array();

function doClick(){
    var val=document.getElementById("text1").value;
    data.push(val);
    
    var res='<ol>';
    for(var i=0;i<data.length;i++){
        res +='<li>'+data[i]+"</li>";
    }
    res+='</ol>';
    var msg=document.getElementById('msg');
    msg.innerHTML=res;
    }