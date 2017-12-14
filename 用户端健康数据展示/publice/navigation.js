$(function(){
	let sidebar=$(`<div id="sidebar">
					 <img class="logo" src="../img/hombee.png" alt="HOMBEE" />
					 <div class="login_img"><img src=""/></div>
					 <p class="login_name">当前用户名</p>
					 <span class='hr'></span>
					 <p class="title"><img src="../img/side_1.png"/><span>我的健康</span></p>
					 <p class="title"><img src="../img/side_3.png"/><span>朋友圈</span></p>
					 <p class="title"><img src="../img/side_5.png"/><span>我的好友</span></p>
					 <p class="title"><img src="../img/side_7.png"/><span>关于</span></p>
				   </div>`);
	 let top_nav=$(`<div id="top_nav">
					  <h2></h2>
					  <span><img class='add_Friend' src="../img/top_5.png" alt="添加好友" /></span>
					  <span><img class='msg_Inform' src="../img/top_3.png" alt="消息通知" /></span>
					  <span><img src="../img/top_1.png" alt="退出登录" /></span>
	 				</div>`)
	$("body").prepend(sidebar,top_nav);//--在body标签开始位置追加

	$("#sidebar .title").eq(0).click(function(){
		window.location.href ="myhealth.html"
	}); //--点击我的健康

	$("#sidebar .title").eq(1).click(function(){
		window.location.href="friends.html"
	}); //--点击朋友圈

	$("#sidebar .title").eq(2).click(function(){
		window.location.href="myfriend.html"
	}); //--点击我的好友

	$("#sidebar .title").eq(3).click(function(){
		window.location.href="about.html"
	}); //--点击关于

	//---------鼠标悬浮在右上角按钮切换路径
	// $("#top_nav span img").mouseover(function(){
	// 	let src=$(this).attr("src");
	// 	if(src.indexOf("1")>=0){
	// 		$(this).attr('src','../img/top_2.png')
	// 	}
	// 	if(src.indexOf("3")>=0){
	// 		$(this).attr('src','../img/top_4.png')
	// 	}
	// 	if(src.indexOf("5")>=0){
	// 		$(this).attr('src','../img/top_6.png')
	// 	}
	// });
	// $("#top_nav span img").mouseout(function(){
	// 	let src=$(this).attr("src");
	// 	if(src.indexOf("2")>=0){
	// 		$(this).attr('src','../img/top_1.png')
	// 	}
	// 	if(src.indexOf("4")>=0){
	// 		$(this).attr('src','../img/top_3.png')
	// 	}
	// 	if(src.indexOf("6")>=0){
	// 		$(this).attr('src','../img/top_5.png')
	// 	}
	// });

	//	------------点击添加好友的按钮
	let addFrd=$(`<div id="addFrd">
						  <p class='title'>添加<span style='color:#6ACFED;'>好友</span></p>
						  <p class='search'><input type="text" placeholder='请输入账号或昵称'/><button>搜索</button></p>
					  </div>`)
	let friendDiv=$(`<div class='item'>
							  <div class='friendImg'></div>
							  <div class='friendMsg'>
								  <p class='name'>什么鬼</p>
								  <p class='mobile'>17625621850</p>
							  </div>
							  <div class='health'>
								  <p>健康指数</p>
								  <p class='num'>23367</p>
							  </div>
							  <input type="text" placeholder='请输入备注信息'/>
							  <button>添加好友</button>
						  </div>`)
	addFrd.append(friendDiv);
	addFrd.appendTo($('body'));
	$("#top_nav .add_Friend").click(function(){
		if(!$(this).is('.block')){
			$(this).attr('src','../img/top_6.png').addClass('block');
			$("#addFrd").show(500);
			$("#inform").css('display', 'none');
			$("#top_nav .msg_Inform").attr('src','../img/top_3.png')
		}else{
			$(this).attr('src','../img/top_5.png').removeClass('block');
			$("#addFrd").hide(500);
		}	
	})

	//-------点击消息通知的按钮
	let inform=$(`<div id="inform">
						  <p class="title">消息中心</p>
						  <div class="apply">
							  <span>好友申请</span>
							  <div class="img"></div>
							  <div class="applyMsg">
								  <p class="name">哈哈哈</p>
								  <p class="mobile">17625621850</p>
							  </div>
							  <button class='true'>接受</button><button class='false'>拒绝</button>
						  </div>
						  <div class="system">
							  <span>系统消息</span>
						  </div>
					  </div>`)
	inform.appendTo($('body'));
	$("#top_nav .msg_Inform").click(function(){
		if(!$(this).is('.block')){
			$(this).attr('src','../img/top_4.png').addClass('block');
			$("#inform").show(500);
			$("#addFrd").css('display', 'none');
			$("#top_nav .add_Friend").attr('src','../img/top_5.png')
		}else{
			$(this).attr('src','../img/top_3.png').removeClass('block');
			$("#inform").hide(500);
		}	
	})



})