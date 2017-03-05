/**
 * Created by novax_000 on 2017/3/4.
 */



//为所有输入框添加focus和blur事件

var input = document.getElementsByTagName("input");
for(var i = 0;i<input.length;i++)
{
    if(input[i].id!="submit") {
        input[i].addEventListener("focus",focus);
        input[i].addEventListener("blur",blur);
    }
}


//输入框获取焦点时，边框变蓝色，下方显示表单填写规则
function focus(){
    this.style.border="1px solid blue";
    var rule;
    switch (this.id){
        case "text":
            rule = document.getElementById("text_hint");
            rule.innerHTML="必填，长度为4-16个字符";
            break;
        case "password":
            rule = document.getElementById("password_hint");
            rule.innerHTML="必填，密码长度不少于8位";
            break;
        case "confirm":
            rule = document.getElementById("confirm_hint");
            rule.innerHTML="必填，请重复输入密码";
            break;
        case "email":
            rule = document.getElementById("email_hint");
            rule.innerHTML="必填，请输入正确email";
            break;
        case "tel":
            rule = document.getElementById("tel_hint");
            rule.innerHTML="必填，请输入您的手机号";
            break;
    }
    rule.style.color="#ccc";
    rule.style.display="inline";

}

//失去焦点时，对表单做验证
function blur(){
    this.style.border="1px solid #ccc";
    switch (this.id){
        case "text":
            verify_text();
            break;
        case "password":
            verify_password();
            break;
        case "confirm":
            confirm();
            break;
        case "email":
            verify_email();
            break;
        case "tel":
            verify_tel();
            break;
    }


}


function verify_text(){
    var text = document.getElementById("text");
    var hint = document.getElementById("text_hint");
    if(text.value==null||text.value.length==0)
    {
        hint.innerHTML = "姓名不能为空";
        hint.style.color="red";
        text.style.border="1px solid red";
        hint.style.display="inline";
    }

    else if(getTextLength(text.value)<4||getTextLength(text.value)>16)
    {
        hint.innerHTML="字符数应该在4-16位";
        hint.style.color="red";
        text.style.border="1px solid red";
        hint.style.display="inline";
    }
    else
    {
        hint.innerHTML="名称格式正确";
        hint.style.color="green";
        text.style.border="1px solid green";
        hint.style.display="inline";
        return true;
    }
    return false;
}

function verify_password(){
    var password = document.getElementById("password");
    var hint = document.getElementById("password_hint");
    if(password.value==null||password.value.length==0)
    {
        hint.innerHTML = "密码不能为空";
        hint.style.color="red";
        password.style.border="1px solid red";
        hint.style.display="inline";
    }

    else if(password.value.length<8)
    {
        hint.innerHTML="密码长度不能少于8位";
        hint.style.color="red";
        password.style.border="1px solid red";
        hint.style.display="inline";
    }
    else
    {
        hint.innerHTML="密码格式正确";
        hint.style.color="green";
        password.style.border="1px solid green";
        hint.style.display="inline";
        return true;
    }
    return false;
}

function confirm(){
    var confirm = document.getElementById("confirm");
    var hint = document.getElementById("confirm_hint");
    var password = document.getElementById("password");
    if(confirm.value==""||confirm.value==null||confirm.value!=password.value)
    {
        hint.innerHTML = "两次密码输入不一致";
        hint.style.color="red";
        password.style.border="1px solid red";
        hint.style.display="inline";
    }
    else
    {
        hint.innerHTML="密码输入一致";
        hint.style.color="green";
        password.style.border="1px solid green";
        hint.style.display="inline";
        return true;
    }
    return false;
}

function verify_email(){
    var email = document.getElementById("email");
    var hint = document.getElementById("email_hint");
    var reg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;

    if(email.value==null||email.value=="")
    {
        hint.innerHTML = "邮箱不能为空";
        hint.style.color="red";
        email.style.border="1px solid red";
        hint.style.display="inline";
    }
    else if(!reg.test(email.value))
    {
        hint.innerHTML = "邮箱格式不正确";
        hint.style.color="red";
        email.style.border="1px solid red";
        hint.style.display="inline";
    }
    else
    {
        hint.innerHTML="邮箱格式正确";
        hint.style.color="green";
        email.style.border="1px solid green";
        hint.style.display="inline";
        return true;
    }
    return false;
}

function verify_tel(){
    var tel = document.getElementById("tel");
    var hint = document.getElementById("tel_hint");
    var reg = /^1\d{10}$/;

    if(tel.value==null||tel.value=="")
    {
        hint.innerHTML = "手机号不能为空";
        hint.style.color="red";
        tel.style.border="1px solid red";
        hint.style.display="inline";
    }
    else if(!reg.test(tel.value))
    {
        hint.innerHTML = "手机格式不正确";
        hint.style.color="red";
        tel.style.border="1px solid red";
        hint.style.display="inline";
    }
    else
    {
        hint.innerHTML="手机格式正确";
        hint.style.color="green";
        tel.style.border="1px solid green";
        hint.style.display="inline";
        return true;
    }
    return false;
}
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

//提交验证
function check(){
    var flag;
    flag=verify_text();
    flag=verify_password()&&flag;
    flag=confirm()&&flag;
    flag=verify_email()&&flag;
    flag=verify_tel()&&flag;
    if(flag)
    {
        alert("提交成功");
        return true;
    }else{
        alert("提交失败");
        return false;
    }
}
