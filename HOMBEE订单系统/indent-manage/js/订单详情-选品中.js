window.onload=function(){
   let mengban=document.getElementById("mengban");
   let zubao=document.querySelector("#mengban>.zubao");
   let danping=document.querySelector("#mengban>.danping");
   let close=document.querySelectorAll("#mengban h3>.close");
   let addZubao=document.querySelectorAll(".item-msg>p .add");
   let addDanping=document.querySelectorAll(".item-msg>p .danping");   
   Array.from(addZubao).forEach(item=>{
      item.onclick=function(){
         mengban.style.display="block";
         zubao.style.display="block";
         danping.style.display="none";
      }
   })
   Array.from(addDanping).forEach(item=>{
      item.onclick=function(){
         mengban.style.display="block";
         zubao.style.display="none";
         danping.style.display="block";
      }
   })
   Array.from(close).forEach(item=>{
      item.onclick=function(){
         mengban.style.display="none";
      }
   })
   


    //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';
}