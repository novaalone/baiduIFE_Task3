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
            case "dfs":
                reset();
                dfs(root);

                show();
                break;
            case "bfs":
                reset();
                bfs(root);

                show();
                break;

        }
    }

});


//遍历顺序记录在数组中
var arr=[];
//bfs

function bfs(root)
{

    var queue = [];
    var visited = new Set();
    if(root)
    {
        var cNode;
        queue.push(root);
        while(queue.length!=0)
        {
            cNode = queue.shift();
            if (!visited.has(cNode)) {
                arr.push(cNode);
                visited.add(cNode);
                if(cNode.firstElementChild)
                {
                    var child = cNode.firstElementChild;
                    queue.push(child);
                    while(child.nextElementSibling)
                    {
                        queue.push(child.nextElementSibling);
                        child=child.nextElementSibling;
                    }

                }

            }
        }
    }

}

//dfs

function dfs(root)
{
    var queue = [];
    var visited = new Set();
    if(root)
    {
        var cNode;
        queue.push(root);
        while(queue.length!=0) {
            cNode = queue.shift();
            if (!visited.has(cNode)) {
                arr.push(cNode);
                visited.add(cNode);
                var children = root.getElementsByTagName("div");
                for (var i = 0; i < children.length; i++) {
                    queue.push(children[i]);
                }
            }
        }

    }
}
//初始化
function reset(){
    arr=[];
    i=0;
    keyword="";
    found=false;
    var node = document.getElementsByClassName("node");
    for(var j=0;j<node.length;j++)
    {
        node[j].style.color="black";
        node[j].style.backgroundColor="white";
    }
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

var keyword;
var found;
//查询
function search(){
    if(i<arr.length)
    {
        if(current)
        {
            current.style.backgroundColor="white";
        }
        arr[i].style.backgroundColor="red";
        console.log(arr[i].firstChild.nodeValue.trim());
        if(arr[i].firstChild.nodeValue.trim()==keyword)
        {
            arr[i].style.color="yellow";
            found=true;
        }
        current=arr[i];
        i++;
        setTimeout(search,1000);
    }else
    {
        current.style.backgroundColor="white";
        if(!found)
        {
            alert("遍历结束，找不到查询的内容");
        }
        else{
            alert("遍历结束,查找到的内容已标黄");
        }
    }
}

var search_btn = document.getElementById("search");
search_btn.addEventListener("click",function(ev){

    var ev = ev||window.event;
    var target = ev.target||ev.srcElement;
    if(target.nodeName.toLocaleLowerCase()=="button")
    {

        reset();
        keyword = document.getElementById("keyword").value;
        var root = document.getElementById("root");
            switch (target.id){
                case "search_bfs":
                    if(keyword==""||keyword==null)
                    {
                        alert("请输入查询内容");
                    }
                    else
                    {
                    bfs(root);
                    search();
                    }
                    break;
                case "search_dfs":
                    if(keyword==""||keyword==null)
                    {
                        alert("请输入查询内容");
                    }else{
                        dfs(root);
                        search();
                    }
                    break;

        }

    }


});


var wrapper = document.getElementById("wrapper");
wrapper.addEventListener("click",function(ev){
   var ev = ev||window.event;
    var target = ev.target||ev.srcElement;
    if(target.nodeName.toLocaleLowerCase()=="div")
    {
        reset();
        target.style.backgroundColor="green";
        target.style.color="white";
    }
});


//删除节点
var delete_btn = document.getElementById("delete_btn");
delete_btn.addEventListener("click",function(){
   var node = document.getElementsByClassName("node");
    var flag = false;
    for(var i = 0;i<node.length;i++)
    {
        if(node[i].style.backgroundColor=="green")
        {
            node[i].parentNode.removeChild(node[i]);
            flag=true;
        }
    }
    if(!flag)
    {
        alert("没有选中的节点");
    }
});

//添加节点
var add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click",function(){
   var node = document.getElementsByClassName("node");
    var text = document.getElementById("add_text").value;
    //创建节点
    var childNode = document.createElement("div");
    childNode.innerHTML=text;
    childNode.className="node";
    var flag = false;
    for(var i=0;i<node.length;i++)
    {
        if(node[i].style.backgroundColor=="green")
        {
            node[i].appendChild(childNode);
            flag=true;
        }
    }
    if(!flag)
    {
        alert("没有选中的节点");
    }
});