/* 循环往 pre 标签里添加 code 标签 */
const allpre = document.getElementsByTagName("pre");
for (let i = 0; i < allpre.length; i++) {
    const onepre = document.getElementsByTagName("pre")[i];
    const mycode = document.getElementsByTagName("pre")[i].innerHTML;
    onepre.innerHTML = '<button class="btn" data-clipboard-action="copy">复制代码</button><code id="mycode">' + mycode + '</code>';  //在 code 层前面增加了一个 button
}
/* 行号支持 */
hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();
/* 为 pre 循环增加 id，并为 pre 内的 button 增加 data-clipboard-target 属性 */
$("pre").each(function () {
    $(this).attr('id', "pre" + $(this).index());
    const btns = $(this).find("button");
    $(btns).attr('data-clipboard-target', "#pre" + $(this).index())
});
const clipboard = new ClipboardJS('.btn');
clipboard.on('success', function (e) {
    console.log(e);
    UIkit.notification({message: '复制成功!', status: 'success'})
});
clipboard.on('error', function (e) {
    console.log(e);
    alert("复制失败！");
});