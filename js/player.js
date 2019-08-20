    //----------------- 选手列表点击加载---------------
    var _content = []; //临时存储li循环内容
  var products = {
    _default:6, //默认显示图片个数
    _loading:2,  //每次点击按钮后加载的个数
    init:function(){
      var lis = $(".products .products_description li");
      $(".products ul.download").html("");
      for(var n=0;n<products._default;n++){
        lis.eq(n).appendTo(".products ul.download");
      }
      for(var i=products._default;i<lis.length;i++){
        _content.push(lis.eq(i));
      } 
      $(".products .products_description").html("");
    },
    loadMore:function(){
      var mLis = $(".products ul.download li").length;
      for(var i =0;i<products._loading;i++){
        var master = _content.shift();
        if(!master){
          $('.products .more').html("<a>全部加载完毕...</a>");
          break;
        }
        $(".products ul.download").append(master);
      }
    }
  }
  products.init();
 
// -------------------选手列表 音乐播放---------
    $(function(){
        //jq 转js 控制暂停或播放切换
        // 获取所有audios
        var audios = document.getElementsByTagName("audio");
        // 暂停函数
        function pauseAll() {
            var self = this;
            [].forEach.call(audios, function (i) {
                // 将audios中其他的audio全部暂停
                i !== self && i.pause();
            })
        }
        // 给play事件绑定暂停函数
        [].forEach.call(audios, function (i) {
            i.addEventListener("play", pauseAll.bind(i));
        });
        //点击切换播放
        $(".paly").click(function () {
            if(!$(this).hasClass("video-img-paly")){//如果当前播放
                $('.paly').removeClass("video-img-paly");
                $('.video-iocn').attr('src','img/paly.png'); //播放图片
                $(this).addClass("video-img-paly");
                $(this).find('.video-iocn').attr('src','img/suspend.png');  //播放图片
                $(this).find('.audio').get(0).play();  //开始播
            }else{ //如果当前暂停
                $(this).removeClass("video-img-paly");
                $(this).find('.video-iocn').attr('src','img/paly.png');  //播放图片
                $(this).find('.audio').get(0).pause();  //开始播放
            }
        })
    });


//------------------------index页面 音乐点击旋转---------------------
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
  //-------------------互动酷协议  投票按钮  qr--------------------------
        $('#button,.hdk-vote,.top_qr').click(function(){
          $('.shadow,.qr').show();
        });
        $('#hide,.disappear').click(function(){
          $('.shadow,.qr').hide();
        });



//------------------------------ 选手分组----------------------------
  $(function(){
      $(".checkspan").bind("click",function(){
        var ul = $(this).siblings('ul')
        if(ul.is(":hidden")){
          ul.slideDown('400', function() {
            $(this).find("li").bind("click",function(){
              var selectLi=$(this).text();
              $("#select span").text(selectLi);
              $("#select ul").slideUp(400);
              $(this).addClass("click_select_color");
              $(".click_change_bgcolor").not($(this)).removeClass("click_select_color");
              var data = $(this).attr("data");
                $("#player_list").html('<a href="player.html"class="hdk-Player"><div class="hdk-order"style="background-color:#ff3600"><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">返回什么叫人身啥问题和热狗攻击我几乎无任何附属公司</div></div><p>12345<span>票</span></p></a><a href="player.html"class="hdk-Player"><div class="hdk-order"style="background-color:#fe8a00"><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">问题尤为</div></div><p>12345<span>票</span></p></a><a href="player.html"class="hdk-Player"><div class="hdk-order"style="background-color:#ffd800 "><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">我回头我让他和</div></div><p>12345<span>票</span></p></a><a href="player.html"class="hdk-Player"><div class="hdk-order"><p>1</p></div><div class="hdk-chart"><img src="img/222.jpg"></div><div class="fullnames"><div class="fullname">台海问题翰威特核问题会谈认为</div></div><p>12345<span>票</span></p></a>');
            })
          });
        }else{
            $(this).siblings('ul').slideUp(400);
            
        } 
      })
    })

  // --------------------选手点击加载列表---------------------
  var _contents = []; //临时存储li循环内容
  var moreload = {
    _default:5, //默认显示图片个数
    _loading:2,  //每次点击按钮后加载的个数
    init:function(){
      var lis = $(".moreload .module li");
      $(".moreload ul.lists").html("");
      for(var n=0;n<moreload._default;n++){
        lis.eq(n).appendTo(".moreload ul.lists");
      }
      for(var i=moreload._default;i<lis.length;i++){
        _contents.push(lis.eq(i));
      } 
      $(".moreload .module").html("");
    },
    loadMore:function(){
      var mLis = $(".moreload ul.lists li").length;
      for(var i =0;i<moreload._loading;i++){
        var target = _contents.shift();
        if(!target){
          $('.moreload .more').html("<a>全部加载完毕...</a>");
          break;
        }
        $(".moreload ul.lists").append(target);
      }
    }
  }
  moreload.init();


