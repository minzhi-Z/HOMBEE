function $(...args){
   return document.querySelectorAll(...args)
}
window.onload=function(){
   let addBtn=$("#main>.btn>input")[0];
   let mengban=document.getElementById("mengban");
   let redactDiv=$("#mengban>.msg")[0];
   let deleteDiv=$("#mengban>.informMsg")[0];
   let title=$("#mengban h3>b")[0];
   let close=$("#mengban h3>.close")[0];
   let cancel=$("#mengban .btn>.cancel")[0];
   let redacts=$(".table>p .redact");
   let deletes=$(".table>p .delete");
   let inform2=$("#mengban>.informMsg>.inform")[0];
   let cancel2=$("#mengban>.informMsg>.cancel")[0];

   //-----新增客户信息
   addBtn.onclick=function(){
      title.innerHTML="新增企业客户"
      mengban.style.display="block";
      redactDiv.style.display="block";
      deleteDiv.style.display="none";
   }

   //-----编辑客户信息
   Array.from(redacts).forEach(redact=>{
      redact.onclick=function(ev){
         ev.preventDefault();
         title.innerHTML="编辑企业客户"
         mengban.style.display="block";
         redactDiv.style.display="block";
         deleteDiv.style.display="none";
      }
   })
   cancel.onclick=function(){
      mengban.style.display="none";
   }
   close.onclick=function(){
      mengban.style.display="none";
   }

   //-----删除企业客户信息
   Array.from(deletes).forEach(item=>{
      item.onclick=function(ev){
         ev.preventDefault();
         mengban.style.display="block";
         redactDiv.style.display="none";
         deleteDiv.style.display="block";
      }
   })
   cancel2.onclick=function(){
      mengban.style.display='none';
   }


    //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';
}