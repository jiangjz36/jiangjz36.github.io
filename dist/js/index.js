function getCountdown(t){var e=new Date;targetTime=new Date(t),timer=targetTime-e,day=parseInt(timer/24/60/60/1e3),h=parseInt(timer/60/60/1e3%24),m=parseInt(timer/60/1e3%60),s=parseInt(timer/1e3%60),ms=parseInt(timer%1e3/100);var n=h2=m1=m2=s1=s2=0;return timer<1?(ms=0,arr=[day,n,h2,m1,m2,s1,s2,ms],arr):(h<10?(n=0,h2=h):(n=parseInt(h/10),h2=h%10),m<10?(m1=0,m2=m):(m1=parseInt(m/10),m2=m%10),s<10?(s1=0,s2=s):(s1=parseInt(s/10),s2=s%10),arr=[day,n,h2,m1,m2,s1,s2,ms],arr)}function s1BtnNext(){s1_pb.hide(),8==++s1_index&&(s1_index=0),s1_pb.eq(s1_index).show(),$("#bi_ix").text(s1_index+1)}function s1BtnPrev(){s1_pb.hide(),-1==--s1_index&&(s1_index=7),s1_pb.eq(s1_index).show(),$("#bi_ix").text(s1_index+1)}function s4BtnNext(){s4_pb.hide(),10==++s4_index&&(s4_index=0),s4_pb.eq(s4_index).show(),$("#b4_ix").text(s4_index+1)}function s4BtnPrev(){s4_pb.hide(),-1==--s4_index&&(s4_index=9),s4_pb.eq(s4_index).show(),$("#b4_ix").text(s4_index+1)}function fBtnNextMove(t){clearInterval(timer),++fIndex>2&&(fIndex=1,t.css("left","0")),t.stop().animate({left:-90*fIndex+"px"})}function fBtnPrevMove(t){clearInterval(timer),--fIndex<0&&(fIndex=1,t.css("left","-180px")),t.stop().animate({left:-90*fIndex+"px"})}function click_scroll(t){$("body,html").animate({scrollTop:t.offset().top},800)}$(function(){var t=$("#carousel").find("img"),e=($("#sub_carousel").find("a"),["FEE6ED","FFEBED","FB7023","DAF0BF","D0FCF0"]),n=-1;t.eq(0).show(),setInterval(function(){5==++n&&(n=0),$(".banner").css("background","#"+e[n]),t.eq(n-1).hide().css({width:"850.5px",height:"504px","margin-top":"-20.25px","margin-left":"-12px"}).parent().next().children().eq(n-1).stop().animate({bottom:0}),t.eq(n).show().animate({width:810,height:480,"margin-top":0,"margin-left":0},2500,"linear").parent().next().children().eq(n).stop().animate({bottom:10})},3e3)}),setInterval(function(){var t=getCountdown("10 27,2017 00:00:00");$("#hour_1").html(t[1]),$("#hour_2").html(t[2]),$("#minute_1").html(t[3]),$("#minute_2").html(t[4]),$("#second_1").html(t[5]),$("#second_2").html(t[6]),$("#millisecond").html(t[7])},1);var s1_index=0,s1_pb=$(".s1_pb");$("#s1_btn_next").click(s1BtnNext),$("#s1_btn_prev").click(s1BtnPrev),$("#bi_next").click(s1BtnNext),$("#bi_prev").click(s1BtnPrev);var s3B=$("#s3_h2").find("b");setInterval(function(){s3B.eq(0).stop().animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(50).animate({bottom:"   8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(100).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(150).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(200).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(250).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(300).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(350).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(400).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(450).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(500).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(550).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(600).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(650).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)}).next().stop().delay(700).animate({bottom:"8px"},200,function(){$(this).animate({bottom:"0"},100)})},1800),setInterval(function(){var t=getCountdown("10 20,2017 00:00:00");$("#s3_time_1").html(t[0]+"天"+t[1]+t[2]+"小时"+t[3]+t[4]+"分"+t[5]+t[6]+"秒");var e=getCountdown("10 20,2017 00:00:00");$("#s3_time_2").html(e[0]+"天"+e[1]+e[2]+"小时"+e[3]+e[4]+"分"+e[5]+e[6]+"秒");var n=getCountdown("10 22,2017 00:00:00");$("#s3_time_3").html(n[0]+"天"+n[1]+n[2]+"小时"+n[3]+n[4]+"分"+n[5]+n[6]+"秒");var i=getCountdown("10 20,2017 00:00:00");$("#s3_time_4").html(i[0]+"天"+i[1]+i[2]+"小时"+i[3]+i[4]+"分"+i[5]+i[6]+"秒");var o=getCountdown("10 23,2017 00:00:00");$("#s3_time_5").html(o[0]+"天"+o[1]+o[2]+"小时"+o[3]+o[4]+"分"+o[5]+o[6]+"秒");var s=getCountdown("10 20,2017 00:00:00");$("#s3_time_6").html(s[0]+"天"+s[1]+s[2]+"小时"+s[3]+s[4]+"分"+s[5]+s[6]+"秒");var a=getCountdown("10 20,2017 00:00:00");$("#s3_time_7").html(a[0]+"天"+a[1]+a[2]+"小时"+a[3]+a[4]+"分"+a[5]+a[6]+"秒");var m=getCountdown("10 22,2017 00:00:00");$("#s3_time_8").html(m[0]+"天"+m[1]+m[2]+"小时"+m[3]+m[4]+"分"+m[5]+m[6]+"秒");var r=getCountdown("10 20,2017 00:00:00");$("#s3_time_9").html(r[0]+"天"+r[1]+r[2]+"小时"+r[3]+r[4]+"分"+r[5]+r[6]+"秒");var l=getCountdown("10 21,2017 00:00:00");$("#s3_time_10").html(l[0]+"天"+l[1]+l[2]+"小时"+l[3]+l[4]+"分"+l[5]+l[6]+"秒");var x=getCountdown("10 20,2017 00:00:00");$("#s3_time_11").html(x[0]+"天"+x[1]+x[2]+"小时"+x[3]+x[4]+"分"+x[5]+x[6]+"秒");var _=getCountdown("10 20,2017 00:00:00");$("#s3_time_12").html(_[0]+"天"+_[1]+_[2]+"小时"+_[3]+_[4]+"分"+_[5]+_[6]+"秒")},100);var s3Img=$(".s3_ps_img");s3Img.hover(function(){$(this).find("img").animate({width:"304.5px",height:"241.5px",left:"-7.25px",top:"-5.75px"},600)},function(){$(this).find("img").animate({width:"290px",height:"230px",left:"0px",top:"0px"},600)});var s4_index=0,s4_pb=$(".s4_pb");$("#s4_btn_next").click(s4BtnNext),$("#s4_btn_prev").click(s4BtnPrev),$("#b4_next").click(s4BtnNext),$("#b4_prev").click(s4BtnPrev);var fBtnNext=$(".f_btn_next"),fBtnPrev=$(".f_btn_prev"),fTimer=null,fIndex=1;fBtnNext.click(function(){fBtnNextMove($(".f_carousel").find("ul"))}),fBtnPrev.click(function(){fBtnPrevMove($(".f_carousel").find("ul"))}),clearInterval(fTimer),fTimer=setInterval(function(){fBtnNextMove($(".f_carousel").find("ul"))},2e3),$(window).scroll(function(){var t=$(this).scrollTop();console.log(t),t>3e3?$("#floor_nav").show().css("top",$(window).height()/3):$("#floor_nav").hide()}),$("#floor_nav > a").click(function(){return click_scroll($(".floor").eq($(this).index())),!1});