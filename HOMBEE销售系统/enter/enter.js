window.onload=function(){
   let inputs=Array.from(document.getElementsByTagName("input"));
   inputs.forEach(input=>{
      input.onfocus=function(){
         this.style.border="1px solid #239DEA";
      }
      input.onblur=function(){
         this.style.border="1px solid #888888";
      }
   })

    //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';

}