/**
 * Created by novax_000 on 2017/3/4.
 */
var verify = document.getElementById("verify_btn");
verify.addEventListener("click",function(){

   var text = document.getElementById("text");
    var hint = document.getElementById("hint");
    if(text.value==null||text.value.length==0)
    {
        hint.innerHTML = "姓名不能为空";
        hint.style.color="red";
        text.style.border="1px solid red";
    }

    else if(getTextLength(text.value)<4||getTextLength(text.value)>16)
    {
        hint.innerHTML="字符数应该在4-16位";
        hint.style.color="red";
        text.style.border="1px solid red";
    }
    else
    {
        hint.innerHTML="名称格式正确";
        hint.style.color="green";
        text.style.border="1px solid green";
    }
});

function getTextLength(text){

    var len = 0;
    for(var i =0;i<text.length;i++)
    {
        if(text.charAt(i).match(/[^\x00-\xff]/ig)!=null)
        {
            len+=2;
        }else
        {
            len++;
        }
    }
    return len;
}