function getAllTotal(){for(var e=0,t=0;t<result.length;t++)e+=result[t].buyCount*result[t].jdPrice;$("#tb_total").text(e.toFixed(2))}var result=JSON.parse(sessionStorage.getItem("buyMall"));console.log(result);for(var oBody=document.getElementById("ss_body"),i=0;i<result.length;i++){var oDiv=document.createElement("div");oDiv.className="sb_sec clear_float",oDiv.innerHTML='<div class="ss_delivery"><input checked="checked" class="ss_select" type="checkbox"><img src="'+result[i].imageurl+'" alt=""><a href="#">'+result[i].wname+'</a></div><div class="ss_price">￥'+result[i].jdPrice+'</div><div class="ss_count"><div class="ss_btn"><button class="ss_b_prev">-</button><input class="ss_b_txt" type="text" value="'+result[i].buyCount+'"><button class="ss_b_next">+</button></div></div><div class="ss_total">￥'+(result[i].jdPrice*result[i].buyCount).toFixed(2)+'</div><div class="ss_action"><a href="#">删除</a></div>',oBody.appendChild(oDiv)}$("#tb_count").text(result.length),getAllTotal();var allSelected=$(".sh_delivery input,.settement_bar input"),shopSelected=$(".ss_delivery input");allSelected.click(function(){"checked"!=$(this).attr("checked")?(allSelected.attr("checked",!0),shopSelected.attr("checked",!0)):(allSelected.attr("checked",!1),shopSelected.attr("checked",!1))}),shopSelected.click(function(){"checked"==$(this).attr("checked")?$(this).attr("checked",!1):$(this).attr("checked",!0);for(var e=0,t=0;t<shopSelected.length;t++)"checked"==shopSelected.eq(t).attr("checked")&&e++;e<shopSelected.length?allSelected.attr("checked",!1):allSelected.attr("checked",!0)}),$(".ss_b_next").click(function(){var e=$(this).parents(".sb_sec").index(),t=$(".ss_b_txt").eq(e),s=parseInt(t.val());s++,t.val(s),result[e].buyCount=s,sessionStorage.setItem("buyMall",JSON.stringify(result));var l=(result[e].jdPrice*result[e].buyCount).toFixed(2);return $(".ss_total").eq(e).text("￥"+l),getAllTotal(),!1}),$(".ss_b_prev").click(function(){var e=$(this).parents(".sb_sec"),t=e.index(),s=$(".ss_b_txt").eq(t),l=parseInt(s.val());if(l<2)l=1,confirm("你确定不购买该商品吗？")&&(e.remove(),result.splice(t,1),sessionStorage.setItem("buyMall",JSON.stringify(result)));else{l--,s.val(l),result[t].buyCount=l,sessionStorage.setItem("buyMall",JSON.stringify(result));var c=(result[t].jdPrice*l).toFixed(2);$(".ss_total").eq(t).text("￥"+c)}return getAllTotal(),!1});var oDel=$(".ss_action a");oDel.click(function(){var e=$(this).parents(".sb_sec"),t=e.index();confirm("你确定不购买该商品吗？")&&(e.remove(),result.splice(t,1),sessionStorage.setItem("buyMall",JSON.stringify(result)))});