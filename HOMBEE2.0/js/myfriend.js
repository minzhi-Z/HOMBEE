$(function(){
	$("#sidebar .title").eq(2).addClass("actived");
	$("#sidebar .title").eq(2).children('img').attr('src', '../img/side_6.png');
	$("#top_nav h2").html(`我的<span style='color:#6ACFED;margin:0;'>好友</span>`)
	
	//----好友信息按照什么来排序
	$("#left>.sort>.btn").click(function(){
		$(this).css('background', '#6ACFED').addClass('btned').siblings('.btn').removeClass('btned').css('background', '#ffffff');
	})
	$("#left>.sort>.btn").eq(0).click();//---默认按照添加时间排序
	
	//----点击设置图片，弹出好友修改选项
	$("#left .item>img").click(function(){
		 let result=$(this).next('.none').css('display');
		 if(result=='none'){
		 	$("#left .item .none").css("display","none");
		 	$("#left .item>img").attr('src', '../img/set.png');
		 	$(this).next('.none').css('display','block');
		 	$(this).attr('src', '../img/set_b.png');
		 }else{
		 	$(this).next('.none').css('display','none');
		 	$(this).attr('src', '../img/set.png');
		 }
	})
	//------点击删除好友
	$("#left .item .delete").click(function(){
		let username=$(this).closest('.item').find('.username').text()
		$("#masking .title").text("删除好友");
		$("#masking .msg").text(`确认删除好友【${username}】吗？`);
		$("#masking .newname").css('display', 'none');
		$("#masking .msg").css("display","block");
		$("#masking").css("display","block");
	})
	//-------点击设置好友备注
	$("#left .item .remark").click(function(){
		$("#masking .title").text("设置备注");

		$("#masking .msg").css('display', 'none');
		$("#masking .newname").css('display','block');
		$("#masking").css("display","block");	
	})
	//----取消删除或者设置，以及关闭蒙版
	$("#masking .cancel").click(function(){
		$("#masking").css("display","none");
	})
	$("#masking .close").click(function(){
		$("#masking").css("display","none");
	})




})