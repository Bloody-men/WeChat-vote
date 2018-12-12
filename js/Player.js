
$("button").click(function(){
	$(".hdk-Advertisement").hide();			//点击删除
});

//tab切换
$('.hdk-Catalog li').click(function(){
	//点击li切换样式
	$(this).addClass('hdk-active').siblings().removeClass('hdk-active');
	//根据li的索引值，来确定那个div显示，其她隐藏。
	$('.hdk-Player>div').eq($(this).index()).show().siblings().hide();
});

