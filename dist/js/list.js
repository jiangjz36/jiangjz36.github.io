function fnFilterBtn(){for(var t=$(".l_fc_sec"),s=[],c=0;c<t.length;c++)s.push(t.eq(c).find("a"));s[0].click(function(){return s[0].removeClass("l_fcs_active"),$(this).addClass("l_fcs_active"),!1}),s[1].click(function(){return s[1].removeClass("l_fcs_active"),$(this).addClass("l_fcs_active"),!1}),s[2].click(function(){return s[2].removeClass("l_fcs_active"),$(this).addClass("l_fcs_active"),!1}),s[3].click(function(){return s[3].removeClass("l_fcs_active"),$(this).addClass("l_fcs_active"),!1})}function fnLcbCollection(){return"true"!=$(this).attr("data-collection")?($(this).attr("data-collection","true").find(".icon_collection").css("background-position","0px -42px"),alert("收藏成功!")):alert("已收藏!"),!1}function fnShopPopupBox(){var t=$(window),s=$("#add_success");$("#add_success").css({display:"block",left:(t.width()-s.outerWidth())/2,top:(t.height()-s.outerHeight())/2}),t.on("scroll resize",function(){$("#add_success").css({left:(t.width()-s.outerWidth())/2,top:(t.height()-s.outerHeight())/2})})}function fnAddShopCart(t){console.log(t),allShopCount++;for(var s=0,c=0;c<shopCartArr.length;c++)t.wareId!=shopCartArr[c].wareId?s++:t.buyCount++;s==shopCartArr.length&&(t.buyCount=1,shopCartArr.push(t)),sessionStorage.setItem("buyMall",JSON.stringify(shopCartArr))}$(function(){$(".history_nav > a:last").removeAttr("href")});var oLcSwitch=$(".lc_switch");oLcSwitch.click(function(){$(".lc_p");"+"==$(this).text()?$(this).text("-").parent().css("border-bottom-width","1px"):$(this).text("+").parent().css("border-bottom-width","2px"),$(this).parent().next().toggle()}),$.ajax({type:"get",url:"https://jiangjz36.github.io/dist/data/jd.json",async:!0,success:function(t){result=t.value.wareList.wareList;for(var s=document.getElementById("l_cart_list"),c=0;c<result.length;c++){var e=document.createElement("div");e.className="l_cl_sec";var l='<a href="#"><img class="l_cls_img" src="'+result[c].imageurl+'" alt=""></a><p class="l_cls_price"><span class="lcp_price">￥'+result[c].jdPrice+'</span><i class="icon_l_divide"></i><span class="lcp_unit_price">单价：￥'+result[c].jdPrice+'</span></p><a href="#" class="l_cls_name"><span class="lcn_name">'+result[c].wname+'</span></a><div class="l_cls_btn"><a href="#" class="l_cb_sales">销量 '+result[c].cid1+'</a><a href="#" class="l_cb_assess">评价 '+result[c].cid2+'</a></div><div class="l_cls_btn1"><button href="#" class="lcb_add_shop_cart" onclick="fnAddShopCart(result['+c+'])">加入购物车</button><a href="#" class="lcb_collection"><i class="icon_collection"></i>收藏</a></div>';e.innerHTML=l,s.appendChild(e)}$(".lcb_collection").click(fnLcbCollection),$(".lcb_add_shop_cart").click(fnShopPopupBox)}}),fnFilterBtn(),$(".ls_btn").click(function(){$(".ls_btn").removeClass("lsb_active"),$(this).addClass("lsb_active")});var allShopCount=0,shopCartArr=[],oSettlementBtn=$("#as_settlement");oSettlementBtn.click(function(){window.location="cart.html"}),$("#as_close,#as_carry_on").click(function(){return $("#add_success").css("display","none"),$(window).off("scroll resize"),!1});