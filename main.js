let html = document.querySelector('#html')
let style = document.querySelector("#style")
let string = `
/* 你好，我是一个新人,
 * 接下来开始加样式了，
 * 我要加的样式是
 **/
#box{
    height:200px;
    width:200px;
}
/* 接下来开始把div变成一个八卦图
 * 首先把div变成一个圆圈
 **/
#box{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#box{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, 
    rgba(255,255,255,1) 50%,
     rgba(0,0,0,1) 50%, 
     rgba(0,0,0,1) 100%);
}
/* 加阴阳两球 */
#box::before{
    width:100px;
    height:100px;
    left:0;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    border-radius:50% ;
    background:radial-gradient(circle, rgba(255,255,255,1) 0%,
    rgba(255,255,255,1) 25%,
    rgba(0,0,0,1) 25%,
    rgba(0,0,0,1) 100%)
}
#box::after{
    width:100px;
    height:100px;
    left:0;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50% ;
    background:radial-gradient(circle, rgba(0,0,0,1) 0%,
    rgba(0,0,0,1) 25%,
    rgba(255,255,255,1) 25%,
    rgba(255,255,255,1) 100%)
}
`
string2 = ''
let n = 0
// 准备两个字符串，一个放入所有的字，另一个依次获取这个的第n个并加1.
let step = () => {
    setTimeout(() => {
        console.log(n)
        if (string[n] == '\n') {
            string2 += '<br>'
        } else if (string[n] == " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0, 99999)
        html.scrollTo(0, 99999)
        if (n < string.length - 1) {
            step()
            n += 1
        }
    }, 0);
}
step()
