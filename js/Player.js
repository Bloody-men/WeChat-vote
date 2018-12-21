// ---点击删除---
$("button").click(function(){
	$(".hdk-Advertisement").hide();			
});

//---tab切换---
$('.hdk-Catalog li').click(function(){
	//点击li切换样式
	$(this).addClass('hdk-active').siblings().removeClass('hdk-active');
	//根据li的索引值，来确定那个div显示，其她隐藏。
	$('.hdk-Player>div').eq($(this).index()).show().siblings().hide();
});

//下拉刷新
$(window).scroll(function(){
    var dmt = $(document).height(); //文件的总高度
    var wid = $(window).height();   //可视区域高度
    var top = $(window).scrollTop()   // 滚动高度
    if(dmt-wid<=top+2){               //文件高度-可视高度<=滚动高度
      for(var i=0;i<1;i++){           //for:滚动一次执行一次
        var html='<div class="hdk-picture"><a href="Player.html"><img src="img/cc.png"></a><div class="hdk-information"><span><div class="hdk-order"><p>1</p></div><h5>杨柳111</h5><p>1234票</p></span><img src="img/love.png"><button>投票</button></div></div><div class="hdk-picture"><a href="Player.html"><img src="img/bb.png"></a><div class="hdk-information"><span><div class="hdk-order"><p>2</p></div><h5>杨建222</h5><p>1234票</p></span><img src="img/love.png"><button>投票</button></div></div><p style="clear: both;"></p>'
      
      }
      $('.tab,.list').append(html);
    }
});