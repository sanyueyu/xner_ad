SOHU_AD = {
		 uitls : {},
		 bet : {}
};	
SOHU_AD.bet = (function ($) {
 var flash = {
		src: "flash/CHANEL_ULTRANOVA_CN_Sohu_260x210_NUIT.swf",//源
		name: "ad_bet_be",
		width: 260,
		height:210,
		wmode: "transparent",
		allowScriptAccess: "always",
		link: null,//连接地址
		id: "ad_bet_be",//div的ID
		firstTime: 1
	},
	cookie =  {
				name: "det",
				time: 24,
				count: 3
	},
	ad_replay = {
				'top': 0,
      			'right': 0,
      			'z-index': 1001,
				'wrapId': 'ad_bet_be'
	},
	that = this,
	sohuvd = new Cookie(document, "ad_det",24),
	timer;
 function loadFlash (flash) {
		 var sohuFlash2 = new sohuFlash(flash.src, flash.name, flash.width, flash.height,"7");
    	sohuFlash2.addParam("quality", "high");
    	sohuFlash2.addParam("wmode",flash.wmode);
   		sohuFlash2.addParam("allowScriptAccess", flash.allowScriptAccess);
   	 	sohuFlash2.addVariable("clickthru",escape(flash.link));
		sohuFlash2.addVariable("firstTime",flash.firstTime);
    	sohuFlash2.write(flash.id);
		return this;
 }
  function loadFlash2 (flash) {
		 var sohuFlash2 = new sohuFlash(flash.src, flash.name, flash.width, flash.height,"7");
    	sohuFlash2.addParam("quality", "high");
    	sohuFlash2.addParam("wmode",flash.wmode);
   		sohuFlash2.addParam("allowScriptAccess", flash.allowScriptAccess);
   	 	sohuFlash2.addVariable("clickthru",escape(flash.link));
    	sohuFlash2.write(flash.id);
		return this;
 }
 function ad_reply(ad_replay) {
			return $('<div id = "ad_replay"></div>').css({'top': ad_replay.top, 'right': ad_replay.right, 'width': 39, 'height': 15,
								'cursor': 'pointer',  'position': 'absolute', 'z-index':ad_replay["z-index"], 
								'background': 'url(http://images.sohu.com/bill/s2012/gates/all/replay_h.png)'})
				.hover(function() {
					$(this)	.css( 'background', 'url(http://images.sohu.com/bill/s2012/gates/all/replay_h.png)');	
				}, function() {
					$(this).css( 'background',  'url(http://images.sohu.com/bill/s2012/gates/all/replay.png)');
				}).appendTo($('#' + ad_replay.wrapId));
				
 }
 function init () {
	 	$(".ad260").css({
				"position": "relative",
				"height": "210px"
		}).empty();
		$('<div id = "ad_bet_be"></div>').css({
			position: 'absolute',
			'z-index': 1000,
			'width': '260',
     		'height': '210',
    		left:0,
     		top: '0'						   
		}).appendTo(".ad260").hide();
		loadFlash(flash);
		flash.name = "ad_bet";
		flash.src = "flash/CHANEL_ULTRANOVA_CN_Sohu_520x210_NUIT.swf";
		flash.width = 520;
		flash.id = "ad_bet";
		$('<div id = "ad_bet"></div>').css({
			position: 'absolute',
			'z-index': 1000,
			'width': '520',
     		'height': '210',
    		left: '-260px',
     		top: '0'						   
		}).appendTo(".ad260").hide();
		loadFlash(flash);		
		sohuvd.vi = sohuvd.vi || 0;
		ad_reply(ad_replay);
		sohuvd.load();
		if(sohuvd.vi != 0) {
			hide();
		} else {
			show(sohuvd.vi);
		}
	return this;
 }
 function show () {
	if(sohuvd.vi == 0) {
		$("#ad_bet").show();
	} else if(sohuvd.vi < 3 && sohuvd.vi != 0) {
		$("#ad_bet").empty();
		//flash.firstTime = 0;
		loadFlash2(flash);	
		$("#ad_bet").show();
	} else {
		hide();	
	}
	sohuvd.vi++;
	sohuvd.store();
	 return this;
 }
 function hide() {
	 //alert(1);
	 $("#ad_bet").hide().empty();	
	  $("#ad_bet_be").show();
	 return this;
 }
 function control () {
	 window.adTallest = {};//close flash
	adTallest.close = function() {
			hide();
	};
	adTallest.open = function() {
			show();
	};
	$("#ad_bet_be").delegate("#ad_replay", "click" , function() {
		$("#ad_bet").empty();
		//flash.firstTime = 0;
		loadFlash(flash);	
		$("#ad_bet").show();	
	});
	return this;
 }
 return {
	init: init,
	show: show,
	control: control,
	hide: hide	 
 };
})(jQuery);
SOHU_AD.bet.init().control();