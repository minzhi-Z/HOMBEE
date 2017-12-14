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
            oIframe.src='../indent-manage/view/indent-list.html'
         }else{
            oNone1.style.display="none"
         }
         if(oPs[2].classList.contains('asided')){
            oNone2.style.display="block";
            oIframe.src='../account-manage/alter-pass.html'
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
      this.style.color="#837FBC";
      oA1[1].style.color="#000000";
      oIframe.src="../indent-manage/view/indent-list.html"
   }
   oA1[1].onclick=function(ev){
      ev.preventDefault();
      this.style.color="#837FBC";
      oA1[0].style.color="#000000";
      oIframe.src="../indent-manage/view/异常单列表.html"
   }

   let oA2=document.querySelectorAll(".none2>a");
   oA2[0].onclick=function(ev){
      ev.preventDefault();
      oIframe.src="../account-manage/alter-pass.html";
   }


   
}