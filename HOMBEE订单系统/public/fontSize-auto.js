window.onload=function(){
   //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';
}