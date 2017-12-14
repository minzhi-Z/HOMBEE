function createMengban(){
   let mengbanDiv=document.createElement('div');
   let informDiv=document.createElement('div');
   let title=document.createElement('p');
   let msg=document.createElement('p');
   let inform=document.createElement('button');
   let cancel=document.createElement('button');

   mengbanDiv.setAttribute('id','mengban');
   mengbanDiv.style.cssText=`width:100%;height:100%;position:fixed;
   top:0;z-index:999;background:rgba(0,0,0,0.5);`
   
   informDiv.style.cssText=`width:16rem;height:8rem;
   padding:1rem 1.5rem;border-radius:8px;margin:15% auto 0;
   background:#fff;text-align:center;`

   title.innerText="删除提示";
   msg.innerText="是否确认要删除此条信息？";
   inform.innerText='确认';
   cancel.innerText='取消';

   title.style.margin='1rem 0 1rem 0'
   msg.style.color='#039DFF';

   inform.style.cssText=`width:5rem;height:1.5rem;outline:none;border:none;
   color:#fff;margin:0.8rem 0.5rem;border-radius:5px;cursor:pointer;background:#039DFF;`

   cancel.style.cssText=`width:5rem;height:1.5rem;outline:none;border:none;
   color:#fff;margin:0.8rem 0.5rem;border-radius:5px;cursor:pointer;`   

   informDiv.appendChild(title);
   informDiv.appendChild(msg,inform,cancel);
   informDiv.appendChild(inform);
   informDiv.appendChild(cancel);
   mengbanDiv.appendChild(informDiv);
   document.body.appendChild(mengbanDiv);
}

createMengban()