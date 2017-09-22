// This is a JavaScript file

function doClick(){
    var text1=document.getElementById("text1");
    var str=text1.value;
    var res='あなたは、['+str+']と書きました';
    var msg=document.getElementById('msg');
    msg.textContent=res;
    }