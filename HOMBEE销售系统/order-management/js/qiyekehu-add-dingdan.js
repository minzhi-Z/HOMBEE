window.onload=function(){
   let mengban=document.getElementById("mengban");
   let close=document.querySelector(".msg>h3>.close");
   let addZubao=document.querySelectorAll(".item-msg>p .add");
   Array.from(addZubao).forEach(item=>{
      item.onclick=function(){
         mengban.style.display="block";
      }
   })
   close.onclick=function(){
      mengban.style.display="none";
   }


    //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';
}