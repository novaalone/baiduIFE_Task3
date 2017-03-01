/**
 * Created by novax_000 on 2017/2/28.
 */

//获取input框输入的内容
function getInput() {

    var input = document.getElementById("input");
    return input.value;
}

//判断输入合法性
function isLegal(input) {
    //正则表达式判断输入是否为数字
    var reg = new RegExp("^[0-9]*$");

    if (input == null || input == "" || !reg.test(input)) {
        alert("输入不合法，请输入数字");
        clear();
        return false;
    }
    if(input<10||input>100)
    {
        alert("输入的数字必须在10-100之间");
        clear();
        return false;
    }

    return true;

}

//清空输入框并使其获得焦点
function clear() {
    var inputBox = document.getElementById("input");
    inputBox.value = "";
    inputBox.focus();
}

//创建li标签
function createLi(input) {
    //创建li标签
    var li = document.createElement("li");
    li.innerHTML=input;
    //给li标签设置高度
   li.style.height=(input*2)+"px";
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

//判断队列元素个数是否超过60
function isOverflow(){
    var queue = document.getElementById("queue");
    if(queue.childElementCount>60)
    {
        alert("队列元素个数超过60，不能继续添加");
        return true;
    }
    return false;
}
//获取按钮
var buttons = document.getElementById("buttons");
//使用事件委托给四个按钮添加事件
buttons.addEventListener("click", function (ev) {
    var ev = ev || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLocaleLowerCase() == "button") {

        var input = getInput();

        //获取ul列表
        var queue = document.getElementById("queue");


        switch (target.id) {
            case "leftIn":
                //点击按钮时，先判断输入是否合法，如果不合法，就清空输入框，并让输入框获得焦点
                console.log("左侧入");
                if (!isLegal(input)||isOverflow()) {
                    return;
                }
                queue.insertBefore(createLi(input), queue.childNodes[0]);
                clear();
                break;
            case "rightIn":
                console.log("右侧入");
                if (!isLegal(input)||isOverflow()) {
                    return;
                }
                queue.appendChild(createLi(input));
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

//使用事件委托给排序按钮添加事件
var sort = document.getElementById("sort_wrapper");
sort.addEventListener("click",function(ev){
    var ev = ev||window.event;
    var target = ev.target||ev.srcElement;
    if(target.nodeName.toLocaleLowerCase()=="button"){
        switch(target.id){
            case "bubble":
                arrays=getArr();
                bubble_sort();
                break;
            case "quick":
                wait();
                break;
            case "insert":
                wait();
                break
            case "select":
                wait();
                break;
        }
    }
});

function wait()
{
    alert("稍等 这个功能还没做 试试冒泡排序吧");
}
//更新元素高度
function resetHeight()
{
    var queue = document.getElementById("queue");
    var li = queue.getElementsByTagName("li");
    for(var i =0;i<li.length;i++)
{
    li[i].style.height=(li[i].innerHTML*2)+"px";
}
}
//获取队列所有元素组成的数组
function getArr()
{
    var queue = document.getElementById("queue");
    var arr = queue.getElementsByTagName("li");
    return arr;
}
//冒泡排序
var bubble_times;
var arrays;
function bubble_sort()
{

    bubble_times=0;
    bubble_process();
}

function bubble_process()
{
    var hint = document.getElementById("hint");
    if(bubble_times<arrays.length)
    {
        for(var j=bubble_times;j<arrays.length;j++)
        {
            if(arrays[bubble_times].innerHTML>arrays[j].innerHTML)
            {
                var temp = arrays[bubble_times].innerHTML;
                arrays[bubble_times].innerHTML=arrays[j].innerHTML;
                arrays[j].innerHTML=temp;

            }
        }
        console.log(bubble_times);

        hint.innerHTML="第"+(bubble_times+1)+"趟";
        resetHeight();
        bubble_times++;
        setTimeout(bubble_process,2000);
    }else
    {
        hint.innerHTML="排序完成,一共"+bubble_times+"趟";
        return;
    }

}
