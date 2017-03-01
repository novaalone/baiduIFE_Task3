/**
 * Created by novax_000 on 2017/2/28.
 */





//创建li标签
function createLi(input) {
    //创建li标签
    var li = document.createElement("li");
    li.innerHTML=input;
    //给li标签设置高度
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


