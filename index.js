$('.better').css({backgroundPosition:"506px 188px"})
	.mouseover(function(){
		$(this).stop().animate({backgroundPosition:"(338px 188px)"}, {duration:0})
	})
	.mouseout(function(){
		$(this).stop().animate({backgroundPosition:"(506px 188px)"}, {duration:0})
	})
	.mousedown(function(){
		$(this).stop().animate({backgroundPosition:"(169px 188px)"}, {duration:0})
	})
	.mouseup(function(){
		$(this).stop().animate({backgroundPosition:"(338px 188px)"}, {duration:0})
	})
$('.hotlist').css({backgroundPosition:"506px 94px"})
	.mouseover(function(){
		$(this).stop().animate({backgroundPosition:"(338px 94px)"}, {duration:0})
	})
	.mouseout(function(){
		$(this).stop().animate({backgroundPosition:"(506px 94px)"}, {duration:0})
	})
	.mousedown(function(){
		$(this).stop().animate({backgroundPosition:"(169px 94px)"}, {duration:0})
	})
	.mouseup(function(){
		$(this).stop().animate({backgroundPosition:"(338px 94px)"}, {duration:0})
	})
$('.uploadpic').css({backgroundPosition:"506px 47px"})
	.mouseover(function(){
		$(this).stop().animate({backgroundPosition:"(338px 47px)"}, {duration:0})
	})
	.mouseout(function(){
		$(this).stop().animate({backgroundPosition:"(506px 47px)"}, {duration:0})
	})
	.mousedown(function(){
		$(this).stop().animate({backgroundPosition:"(169px 47px)"}, {duration:0})
	})
	.mouseup(function(){
		$(this).stop().animate({backgroundPosition:"(338px 47px)"}, {duration:0})
	})
$('.submit').css({backgroundPosition:"506px 141px"})
	.mouseover(function(){
		$(this).stop().animate({backgroundPosition:"(338px 141px)"}, {duration:0})
	})
	.mouseout(function(){
		$(this).stop().animate({backgroundPosition:"(506px 141px)"}, {duration:0})
	})
	.mousedown(function(){
		$(this).stop().animate({backgroundPosition:"(169px 141px)"}, {duration:0})
	})
	.mouseup(function(){
		$(this).stop().animate({backgroundPosition:"(338px 141px)"}, {duration:0})
	})
$('.compare').css({backgroundPosition:"506px 235px"})
	.mouseover(function(){
		$(this).stop().animate({backgroundPosition:"(338px 235px)"}, {duration:0})
	})
	.mouseout(function(){
		$(this).stop().animate({backgroundPosition:"(506px 235px)"}, {duration:0})
	})
	.mousedown(function(){
		$(this).stop().animate({backgroundPosition:"(169px 235px)"}, {duration:0})
	})
	.mouseup(function(){
		$(this).stop().animate({backgroundPosition:"(338px 235px)"}, {duration:0})
	})
function cdown(time){
	var count = time;
	var Chinesecount = [" ","1","2","3","4","5","6","7","8","9","!"]
	countdown = setInterval(function(){
		$(".count").html(Chinesecount[count]).animate({opacity:1},10);
		$(".count").animate({opacity:0},700);
		if (count == 0) {
			window.location = 'http://gcugirl.diandian.com/slow';
		}
		count--;
	}, 1000);
};
function academy(n){
	switch (n)
		{
			case 205:
			return "经济管理学院"
			break
			case 206:
			return "外国语学院"
			break
			case 207:
			return "珠宝学院"
			break
			case 213:
			return "国际商学院"
			break
			case 201:
			return "汽车工程学院"
			break
			case 202:
			return "机械工程学院"
			break
			case 203:
			return "电子信息工程学院"
			break
			case 204:
			return "计算机工程学院"
			break
			case 208:
			return "电气工程学院"
			break
			case 209:
			return "两岸交流"
			break
			case 210:
			return "建筑学院"
			break
			case 211:
			return "土木工程学院"
			break
			case 212:
			return "中兴通讯3G学院"
			break
			case 214:
			return "国际专班"
			break
			case 215:
			return "国际交流中心"
			break
			case 216:
			return "国际工程师学院"
			break
			case 217:
			return "清华IT"
			break
			default:
			return "不明来源"
		}
};
var banner = new Image();
banner.src = "http://x.libdd.com/farm1/0728a4/53c26056/bannermouse.png";
var Banner = {
	banner_alpha:0,
	init : function() {
		$(document.body).append('<div id="banner">f11</div><div id="banner-base"></div>');
		$('#banner').css({
			position:'fixed',
			top:'0',
			left:'0',
			width:'339px',
			height:'329px',
			backgroundImage:'url(http://x.libdd.com/farm1/0728a4/53c26056/bannermouse.png)',
			textIndent:'-9999px',
			overflow:'hidden',
			opacity:0,
			zIndex:100000
		});
		$('#banner-base').css({
			position:'fixed',
			top:0,
			left:0,
			width:'100%',
			height:'100%',
			backgroundColor:'#fff',
			textIndent:'-9999px',
			overflow:'hidden',
			opacity:0,
			zIndex:99999,
			display:'none'
		});				
		$(window).scroll(function(){
			if(window.screen.height >= 870 && $(window).height() <= 800){//屏幕够高则不提示
				$('#banner').css({
					left:($(window).width()-$('#banner').width())/2+'px',
					top:'0'
				});					
				Banner.banner_alpha = 0.8; 
			}
		});
		setInterval(function(){ //定时衰减
			Banner.banner_alpha *= 0.8;
			$('#banner').css({opacity:Banner.banner_alpha});
			// $('#banner-base').css({opacity:Banner.banner_alpha*0.7});
			Banner.banner_alpha < 0.05 ? $('#banner').hide() : $('#banner').show();
		},30);				
	}
};
$("#topicList").ready(function(){
	if($(window).width() < 1150){
		$(".bar").animate({opacity:0},100);
		return 0;
	}
	var x = $(document).scrollTop();
	var bar_x = 175 - x;
	bar_x = (bar_x > 0)?bar_x:30;
	var y = $('#topicList').offset().left;
	var bar_y = y + 940;
	$(".bar").css({"left":bar_y,"top":bar_x});
	$(window).scroll(function(){
		if($(document).scrollTop() < 175){
			var bar_x = 175 - $(document).scrollTop();
			$(".bar").css({"top":bar_x});
		} else {
			$(".bar").css({"top":"30px"});
		}
	});
});
$("#name").blur(function(){
	value = $.trim($(this).val());
	value = value.match(/([\u4E00-\uFA29]|[\uE7C7-\uE7F3]){2,4}/);
	if(!value){
		$("#name").val("");
		$("#name_err").css("display","");
	} else {
		$("#name").val(value[0]);
		$("#name_err").css("display","none");
	}
});
$("#stunum").blur(function(){
	value = $.trim($(this).val());
	$("#stunum").val(value);
	value = value.match(/^20[0,1]\d{9}$/);
	if(!value){
		$("#stunum_err").css("display","");
	} else {
		$("#stunum_err").css("display","none");
	}
});
$("#captcha").blur(function(){
	value = $.trim($(this).val());
	$("#captcha").val(value);
	//value = value.match(/^\d{4}$/);
	if(!value){
		$("#captcha_err").css("display","");
	} else {
		$("#captcha_err").css("display","none");
	}
});
$("#captchapic").click(function(){
	reloadcap();
});
