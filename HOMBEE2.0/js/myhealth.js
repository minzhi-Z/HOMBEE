$(function(){
	//---侧边栏跟顶部导航栏设置
	$("#sidebar .title").eq(0).addClass("actived");
	$("#sidebar .title").eq(0).children('img').attr('src', '../img/side_2.png');
	$("#top_nav h2").html(`我的<span style='color:#6ACFED;margin:0;'>健康总体在状况</span>`)

	//----选择显示数据时间
	$("#above>p>span").click(function(){
		$(this).css('background', '#6ACFED').addClass('selected').siblings('span').removeClass('selected').css('background', '#ffffff');
	});
	$("#above>.time>span").click(function(){
		$(".time input").val('');
	})
	$("#above>.time>span").eq(0).click();//--默认第一个点击
	$("#above>.data>span").eq(0).click();
	$(".time input").change(function(){
		if($(this).val()){
			$("#above>.time>span").css("background","#ffffff").removeClass('selected');
		}
	});

	//-----最新数据的是否标准的判断（用于颜色判断）
	



})