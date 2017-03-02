/**
 * Created by novax_000 on 2017/2/28.
 */


//获取输入
function getInput()
{
    var multi_input = document.getElementById("multi_input");
    var input = multi_input.value.trim().split(/\s+/);
    return input;
}


//创建li标签
function createLi(input) {
    //创建li标签
    var li = document.createElement("li");
    li.innerHTML=input;
    return li;
}
//判断队列是否为空
function isEmpty() {
    var queue = document.getElementById("queue");
    if (queue.childElementCount == 0) {
        alert("队列为空");
        return true;
    }
    return false;
}


//清空文本域
function clear()
{
    var multi_input = document.getElementById("multi_input");
    multi_input.value="";
    multi_input.focus();
}

//获取按钮
var buttons = document.getElementById("buttons");
//使用事件委托给四个按钮添加事件
buttons.addEventListener("click", function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLocaleLowerCase() == "button") {

        var input = getInput();
        console.log(input);
        //获取ul列表
        var queue = document.getElementById("queue");


        switch (target.id) {
            case "leftIn":
                //点击按钮时，先判断输入是否合法，如果不合法，就清空输入框，并让输入框获得焦点
                console.log("左侧入");
                if(input==""||input==null)
                {
                    alert("是不是没输入呀");
                }else {
                    for (var k = input.length - 1; k >= 0; k--) {
                        queue.insertBefore(createLi(input[k]), queue.childNodes[0]);
                    }
                }
                clear();
                break;
            case "rightIn":
                console.log("右侧入");
                if(input==""||input==null)
                {
                    alert("是不是没输入呀");
                }
                else {
                    for (var k = 0; k < input.length; k++) {
                        queue.appendChild(createLi(input[k]));
                    }

                }
                clear();
                break;
            case "leftOut":
                console.log("左侧出");
                if (isEmpty()) {
                    return;
                }
                var removeLeft = queue.childNodes[0];
                queue.removeChild(removeLeft);
              //  alert(removeLeft.innerHTML);

                break;
            case "rightOut":
                console.log("右侧出");
                if (isEmpty()) {
                    return;
                }
                var removeRight = queue.lastElementChild ? queue.lastElementChild : queue.lastChild;
                queue.removeChild(removeRight);
              //  alert(removeRight.innerHTML);
                break;
        }
    }
})

//使用事件委托给li元素添加事件
var queue = document.getElementById("queue");
queue.addEventListener("click", function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLocaleLowerCase() == "li") {
        target.parentNode.removeChild(target);
    }

});


//获取关键字
function getKeyword()
{
    var search_keyword = document.getElementById("search_keyword");
    console.log("keyword:"+search_keyword.value);
    return search_keyword.value;
}

//给查询按钮添加事件
var search_btn = document.getElementById("search_btn");
search_btn.addEventListener("click",function(){
    //获取所有li标签的内容，匹配关键字，如果包含关键字，就改变css样式
    var queue = document.getElementById("queue");
    var li = queue.getElementsByTagName("li");
    for(var start = 0;start<li.length;start++)
    {
        if(li[start].innerHTML.indexOf(getKeyword())>=0)
        {
            li[start].style.backgroundColor="yellow";
        }else{
            li[start].style.backgroundColor="red";
        }
    }
});

