//JavaScriptDocument

$(document).ready(function(){

	//first box
	$(".box").eq(0).addClass("ch_bg");
	
	//for first window moved content
	var _mov = $(".moved");
	_mov.removeClass("hid");
	
	//click event
	$(".box").click(function(){
		
		var _index = $(this).index();
		var atop = w_v(_index);
		
		$(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		$("html, body").animate({scrollTop:atop},1000);
	
	});
	
	//resize event
	$(window).on('resize',function(){
	
		var r_index = $("div.ch_bg").index();
		var	wtop = w_v(r_index);
		
		
		$("html, body").scrollTop(wtop);
		
	});
	
	//scroll event 當滾動到對應順序時，點亮對應按鈕 讓按鈕跟著動
	$(window).on('scroll',function(){
		
		var _h = $(window).height();
		var	_ws = $(window).scrollTop();
		var	_in = Math.round(_ws/_h);
		var	_mov = $(".moved");
		var	_mov1 = $(".moved1");
		var	_mov2 = $(".moved2");
		
		$(".box").eq(_in).addClass("ch_bg").siblings().removeClass("ch_bg");
		
		//for every window moved content(second solution)
		
		if(_in == 0) _mov.removeClass("hid");
		else if (_in != 0 && !(_mov.hasClass("hid"))) _mov.addClass("hid");
		
		if(_in == 1) _mov1.removeClass("hid");
		else if (_in != 1 && !(_mov1.hasClass("hid"))) _mov1.addClass("hid");
		
		if(_in == 2) _mov2.removeClass("hid");
		else if (_in != 2 && !(_mov2.hasClass("hid"))) _mov2.addClass("hid");
		
	});
	
});

function w_v(index){
	
	var a_top = document.body.clientHeight;
	var a_top_v = a_top * index;
	return a_top_v;
}


