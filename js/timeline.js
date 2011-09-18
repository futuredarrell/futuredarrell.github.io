//timeline
var sequence = {
	
	//resets fade in

	//resetToFront(speed)
	//resetToBack(speed)
	//fadeOutAll
	//fadeInAll
	//hideEmpty
	//showEmpty
	//waveImage(imagename.ext)

	'0.5' : function(){
		resetToBack('very-slow');
	},
	'4.0' : function(){
		fadeOutAll();	
	},
	// ... hydrogen
	'6.5' : function(){
		$('#hydrogen').children('.cube').removeClass().addClass('cube show-front fast');
		$('#hydrogen').children('.cube').animate({'opacity': '1'}, 500);
	},
	// ... helium
	'7.5' : function(){
		$('#helium').children('.cube').removeClass().addClass('cube show-front fast');
		$('#helium').children('.cube').animate({'opacity': '1'}, 500)
	},
	// ... lithium
	'8.5' : function(){
		$('#lithium').children('.cube').removeClass().addClass('cube show-front fast');
		$('#lithium').children('.cube').animate({'opacity': '1'}, 500);
	},
	// ... beryllium
	'9.5' : function(){
		$('#beryllium').children('.cube').removeClass().addClass('cube show-front fast');
		$('#beryllium').children('.cube').animate({'opacity': '1'}, 500);
	},
	// ... set back to prepare
	'11.0' : function(){
		resetToFront('fast');
	},
	// ... castles with turrets look
	'14.0' : function(){
		hideEmpty();
	},
	'22.0' : function(){
		resetToBack('very-slow');
	},
	'30.0' : function(){
		$('.cube').removeClass().addClass('cube show-front very-slow');
	},
	'40.0' : function(){
		for(var i = 0; i < 19; i++){
			randomWave('td:nth-child(' + i + ') .cube', function(el, index){
				$(el).removeClass().addClass('cube show-left very-slow');
			});	
		};
	},
	'54.0' : function(){
		resetToFront('very-slow');
	},
	'60.0' : function(){
		resetToBack('very-slow');
		showEmpty();
	},
	//design duality
	'63.0' : function(){
		waveImage('designduality.jpg');
	},
	'75.0' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'80.0' : function(){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'85.0' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'90.0' : function (){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'95.0' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'100.0' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'105.0' : function(){
		resetToBack('medium');
	},
	'110.0' : function(){
		waveImage('mend.jpg');
	},
	'125.0' : function(){
		resetToFront('very-slow');
	},
	'133.0' : function(){
		//gaps image
		waveImage('gaps.jpg');
	},
	'145.0' : function(){
		resetToBack('very-slow');
	},
	'155.0' : function(){
		removeImage();	
	},
	'160.0' : function(){
		$('#gallium').children('.cube').removeClass().addClass('cube show-front fast');
		$('#gallium').children('.cube').animate({'opacity': '1'}, 500);
	},
	'166.0' : function(){
		$('#aluminium').children('.cube').removeClass().addClass('cube show-front fast');
		$('#aluminium').children('.cube').animate({'opacity': '1'}, 500);
	},
	'175.0' : function(){
		resetToFront('very-slow');
	},
	'180' : function () {
		//some kind of fighting image
		waveImage('duel.jpg');	
	},
	'190.0' : function(){
		fadeInAll();
		//victory!
		waveImage('victory.jpg');
	},
	'200.0' : function(){
		resetToBack('medium');
		removeImage();
	},
	'205.0' : function(){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'210.0' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'215.0' : function(){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'220.0' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'225.0' : function(){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'230' : function(){
		wave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'235.0' : function(){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left medium');
		});
	},
	'237' : function(){
		//smiths and rem image
		waveImage('bands.jpg')
	},
	'241' : function(){
		backWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-front medium');
		});
	},
	'250.0' : function(){
		removeImage();
		resetToBack('very-slow');
	},
	'257.0' : function(){
		//show uun
		$('#ununseptium').children('.cube').removeClass().addClass('cube show-front fast');
		$('#ununseptium').children('.cube').animate({'opacity': '1'}, 500);
	},
	'265.0' : function(){
		resetToFront('very-slow');
	},
	'280.0' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'285.0' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'290.0' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-back very-slow');
		});
	},
	'300.0' : function(){
		resetToBack('very-slow');
	},
	'310.0' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-front very-slow');
		});
	},
	'315.0' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'320.0' : function(){
		removeImage();
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-right very-slow');
		});
	},
	'330.0' : function(){
		resetToBack('very-slow');
	},
	'340' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-left very-slow');
		});
	},
	'345' : function(){
		randomWave('.cube', function(el){
			$(el).removeClass().addClass('cube show-front very-slow');
		});
	},
	'350' : function(){
		fadeOutAll();
	}
};