function $(...args){
   return document.querySelectorAll(...args)
}
window.onload=function(){
  let addBtn=$("#main>.btn>input")[0];
  addBtn.onclick=function(){
     window.location.href="qiyekehu-add-dingdan.html"
  }


   //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';
}