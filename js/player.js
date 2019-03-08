// ---点击删除---
// $("button").click(function(){
// 	$(".hdk-Advertisement").hide();			
// });
//index页面 音乐点击旋转
    var $audioBtn = $('#audio-btn');
      $audioBtn.on('click', function () {
          var audio = document.getElementById('music');
          if (audio.paused) {
              audio.play();
              $audioBtn.removeClass('off').addClass('on').find('div').addClass('rotate');
          } else {
              audio.pause();
              $audioBtn.removeClass('on').addClass('off').find('div').removeClass('rotate');
          }
      });


    function my_voice(id){
      var audio = document.getElementById(id);
          var data = $("#"+id).attr("data");
          if(data == undefined)
          {
            data = 1;
          }
        if(data==1){
          $('#yy').prev().attr({'src':'img/paly.png'})
          document.getElementById("yy").pause();



          $("#"+id).attr("data",1);



          $("#"+id).prev().attr({'src':'img/suspend.png'})

          // $("#"+id).html('<audio src="http://www.ytmp3.cn/down/58734.mp3" id="yy"></audio>');
          audio.play();

          $("#"+id).attr("data",2);
        }else{
          $("#"+id).prev().attr({'src':'img/paly.png'})

          // $("#"+id).html('<audio src="http://www.ytmp3.cn/down/58734.mp3" id="yy"></audio>');

          audio.pause();
          $("#"+id).attr("data",1);
        }

    }

//ranking.html 选手分组
  // $(function(){
  //     $(".checkspan").bind("click",function(){
  //       var ul = $(this).siblings('ul')
  //       if(ul.is(":hidden")){
  //         ul.slideDown('400', function() {
  //           $(this).find("li").bind("click",function(){
  //             var selectLi=$(this).text();
  //             $("#select span").text(selectLi);
  //             $("#select ul").slideUp(400);
  //             $(this).addClass("click_select_color");
  //             $(".click_change_bgcolor").not($(this)).removeClass("click_select_color");
  //             var data = $(this).attr("data");
  //               $("#player_list").html('<a href="player.html"class="hdk-Player"><div class="hdk-order"style="background-color:#ff3600"><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">返回什么叫人身啥问题和热狗攻击我几乎无任何附属公司</div></div><p>12345<span>票</span></p></a><a href="player.html"class="hdk-Player"><div class="hdk-order"style="background-color:#fe8a00"><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">问题尤为</div></div><p>12345<span>票</span></p></a><a href="player.html"class="hdk-Player"><div class="hdk-order"style="background-color:#ffd800 "><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">我回头我让他和</div></div><p>12345<span>票</span></p></a><a href="player.html"class="hdk-Player"><div class="hdk-order"><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">台海问题翰威特核问题会谈认为</div></div><p>12345<span>票</span></p></a>');
  //           })
  //         });
  //       }else{
  //           $(this).siblings('ul').slideUp(400);
            
  //       } 
  //     })
  //   })
// player.html 选手介绍
  //     i=0;
  // $('.hide').click(function () {
  //   if(i==0){
  //     $(".span").addClass('height');
  //     $(this).attr({'src':'img/top1.png'})
  //     i=1;
  //   }else{
  //     $('.span').removeClass('height');
  //     $(this).attr({'src':'img/bottom.png'})
  //     i=0
  //   }
  // })
  // 点击加载列表
    var _content = []; //临时存储li循环内容
  var moreload = {
    _default:2, //默认显示图片个数
    _loading:2,  //每次点击按钮后加载的个数
    init:function(){
      var lis = $(".moreload .module li");
      $(".moreload ul.lists").html("");
      for(var n=0;n<moreload._default;n++){
        lis.eq(n).appendTo(".moreload ul.lists");
      }
      for(var i=moreload._default;i<lis.length;i++){
        _content.push(lis.eq(i));
      } 
      $(".moreload .module").html("");
    },
    loadMore:function(){
      var mLis = $(".moreload ul.lists li").length;
      for(var i =0;i<moreload._loading;i++){
        var target = _content.shift();
        if(!target){
          $('.moreload .more').html("<a>全部加载完毕...</a>");
          break;
        }
        $(".moreload ul.lists").append(target);
      }
    }
  }
  moreload.init();
  // --end--
//---index.html tab切换---
$('.hdk-Catalog li').click(function(){
	//点击li切换样式
	$(this).addClass('hdk-active').siblings().removeClass('hdk-active');
	//根据li的索引值，来确定那个div显示，其她隐藏。
	$('.hdk-index-Player>div').eq($(this).index()).show().siblings().hide();
});
//下拉刷新
// $(window).scroll(function(){
//     var dmt = $(document).height(); //文件的总高度
//     var wid = $(window).height();   //可视区域高度
//     var top = $(window).scrollTop()   // 滚动高度
//     if(dmt-wid<=top+2){               //文件高度-可视高度<=滚动高度
//       for(var i=0;i<1;i++){           //for:滚动一次执行一次
//         var html='<div class="hdk-picture"><a href="player.html"><img src="img/cc.png"></a><div class="hdk-information"><div class="box"><div class="hdk-orders"><p>1</p></div><h5>杨柳111</h5><p>1234票</p></div><img src="img/love.png"><button>投票</button></div></div><div class="hdk-picture"><a href="player.html"><img src="img/bb.png"></a><div class="hdk-information"><div class="box"><div class="hdk-orders"><p>2</p></div><h5>杨建222</h5><p>1234票</p></div><img src="img/love.png"><button>投票</button></div></div><div class="hdk-picture"><a href="player.html"><img src="img/cc.png"></a><div class="hdk-information"><div  class="box"><div class="hdk-orders"><p>1</p></div><h5>杨华333</h5><p>1234票</p></div><img src="img/love.png"><button>投票</button></div></div><p style="clear: both;"></p>'
      
//       }
//       $('.tab,.list').append(html);
//     }
// });
//---gift.html 点击选中-----
//       $('.menu').click(function(){
//         $(this).addClass('menu_border');
//         $('.menu').not($(this)).removeClass('menu_border');
//         $(this).children("li").show();
//         $('.menu').not($(this)).children("li").hide();
//       });
// //----money-----
//   $('.menu').click(function(){
//     val=$(this).children('span').html();
//     $('.var').html(val);
//   })
  //----互动酷协议  投票按钮  qr---
        $('#button,.hdk-vote,.top_qr').click(function(){
          $('.shadow,.qr').show();
        });
        $('#hide,.disappear').click(function(){
          $('.shadow,.qr').hide();
        });
//-----join.html  表单验证-----
  // $('input[name=address]').blur(function(){
  //   var a = this.value;
  //   if(a.length<1){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('input[name=bbj]').blur(function(){
  //   var a = this.value;
  //   if(!a.match(/^1[345789]\d{9}$/)){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('input[name=video]').blur(function(){
  //   var a = this.value;
  //   if(a.length<1){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('input[name=Voice]').blur(function(){
  //   var a = this.value;
  //   if(a.length<1){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('input[name=img]').blur(function(){
  //   var a = this.value;
  //   if(a.length<1){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('input[name=name]').blur(function(){
  //   var a = this.value;
  //   if(a.length<2){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('input[name=grouping]').blur(function(){
  //   var a = this.value;
  //   if(a.length<2){
  //     $(this).data({'s':0});
  //     $(this).next().show().delay(3000).fadeOut();
  //   }else{
  //     $(this).data({'s':1});
  //     $(this).next().hide();
  //   }
  // });
  // $('.enrollment').submit(function(){
  //   var tot=0;
  //   $('.name').each(function(){
  //     var flag = $(this).data("s");
  //     if(!flag){
  //       $(this).next().show().delay(3000).fadeOut();
  //       return false;
  //     }
  //     tot+=$(this).data('s');
  //   });
  //   if(tot!=7){
  //   return false; 
  //   }
  // });
// ------上传图片-----
  // $(function() {
  //   $("#book-file").change(function() {
  //     var $file = $(this);
  //     var objUrl = $file[0].files[0];
  //     //获得一个http格式的url路径:mozilla(firefox)||webkit or chrome 
  //     var windowURL = window.URL || window.webkitURL;
  //     //createObjectURL创建一个指向该参数对象(图片)的URL 
  //     var dataURL = windowURL.createObjectURL(objUrl);
  //     // $("#imageview").attr("src", dataURL);
      
  //       var str = "<li style='width: 80px;height: 80px;margin:5px 0 5px 10px;overflow:hidden;float: left;''><img style='width:80px';height:80px; src="+dataURL+" /></li>"
  //         $('#img_box').before(str);
  //   });
  // });              
