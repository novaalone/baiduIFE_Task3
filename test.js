/**
 * Created by novax_000 on 2017/2/28.
 */
var i;
function c()
{
    var arr=[1,2,3,4,5];
    a(arr);
}
function a(arr)
{
    i=0;
    setTimeout(b(arr),1000);
}

function b(arr)
{
    if(i<arr.length)
    {
        console.log(i);
        i++;
        setTimeout(b(arr),1000);
    }else
    {
        return;
    }
}
c();