window.onload=function(){
   //----屏幕分辨率的适配
   // console.log(document.body.clientWidth)
   let oHtml=document.getElementsByTagName('html')[0];
   oHtml.style.fontSize=(document.body.clientWidth*20/1920)+'px';

   let oIframe=document.querySelector('iframe');
   let oPs=document.querySelectorAll("aside>p");
   let oNone1=document.getElementsByClassName("none1")[0];
   let oNone2=document.getElementsByClassName("none2")[0];
   Array.from(oPs).forEach(p=>{
      p.addEventListener('click',function(){
         oPs.forEach(p=>{
            p.classList.remove('asided');
            p.lastChild.src='../img/arr_down_g.png';
         })
         this.classList.add('asided');
         this.lastChild.src='../img/arr_right_w.png';
         if(oPs[1].classList.contains('asided')){
            oNone1.style.display="block";
            oIframe.src='../customer-management/view/qiyekhu.html'
         }else{
            oNone1.style.display="none"
         }
         if(oPs[2].classList.contains('asided')){
            oNone2.style.display="block";
            oIframe.src='../order-management/view/qiyekehu-dingdan.html'
         }else{
            oNone2.style.display="none"
         }
      },false);
   })
   //------增加侧边栏跳转路径
   oPs[0].addEventListener("click",function(){
      oIframe.src='../homepage/view/homepage.html';
   },false);

   let oA1=document.querySelectorAll(".none1>a");
   oA1[0].onclick=function(ev){
      ev.preventDefault();
      this.style.color="#029dff";
      oA1[1].style.color="#000000";
      oIframe.src="../customer-management/view/qiyekhu.html"
   }
   oA1[1].onclick=function(ev){
      ev.preventDefault();
      this.style.color="#029dff";
      oA1[0].style.color="#000000";
      oIframe.src="../customer-management/view/gerenkehu.html"
   }

   let oA2=document.querySelectorAll(".none2>a");
   oA2[0].onclick=function(ev){
      ev.preventDefault();
      this.style.color="#029dff";
      oA2[1].style.color="#000000";
      oIframe.src="../order-management/view/qiyekehu-dingdan.html"
   }
   oA2[1].onclick=function(ev){
      ev.preventDefault();
      this.style.color="#029dff";
      oA2[0].style.color="#000000";
      oIframe.src="../order-management/view/gerenkehu-dingdan.html"
   }


   
}