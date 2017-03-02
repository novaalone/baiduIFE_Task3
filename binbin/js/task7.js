/**
 * Created by novax_000 on 2017/3/2.
 */
//通过事件委托给按钮添加事件
var buttons = document.getElementById("buttons");
buttons.addEventListener("click",function(ev){
  var ev = ev||window.event;
    var target = ev.target||ev.srcElement;
    var root = document.getElementById("root");
    if(target.nodeName.toLocaleLowerCase()=="button")
    {
        switch (target.id){
            case "pre":

                reset();
                preOrder(root);

                show();
                break;
            case "in":

                reset();
                inOrder(root);

                show();
                break;
            case "post":

                reset();
                postOrder(root);

                show();
                break;
            case "level":

                reset();
                levelOrder(root);
                show();
                break;
        }
    }

});


//遍历顺序记录在数组中
var arr=[];
//前序遍历
function preOrder(root){
    if(root)
    {
        arr.push(root);
    preOrder(root.firstElementChild);
    preOrder(root.lastElementChild);
    }
}

//中序遍历
function inOrder(root){
    if(root)
    {

        inOrder(root.firstElementChild);
        arr.push(root);
        inOrder(root.lastElementChild);
    }
}

//后序遍历
function postOrder(root)


{
    if(root)
    {

        postOrder(root.firstElementChild);

        postOrder(root.lastElementChild);
        arr.push(root);
    }
}

//层序遍历
function levelOrder(root){
    var queue = [];
    if(root)
    {
        var cNode;
        queue.push(root);
        while(queue.length!=0)
        {
            cNode = queue.shift();
            arr.push(cNode);
            if(cNode.firstElementChild)
            {
                queue.push(cNode.firstElementChild);
            }
            if(cNode.lastElementChild)
            {
                queue.push(cNode.lastElementChild);
            }
        }
    }

}
//初始化
function reset(){
    arr=[];
    i=0;
}

//记录遍历到的节点
var current;

var i;
//显示遍历过程
function show(){
   if(i<arr.length)
   {
       if(current)
       {
           current.style.backgroundColor="white";
       }
       arr[i].style.backgroundColor="red";
       current=arr[i];
       i++;
       setTimeout(show,1000);
   }else
   {
       current.style.backgroundColor="white";
       alert("遍历结束");
   }
}