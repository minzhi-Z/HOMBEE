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



}