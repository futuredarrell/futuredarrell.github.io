//mega basic scene class for now
function Scene(time, cb){
	
	this.time = time;
	this.played = false;
	this.action = cb;

	return this;
};

//timeline singleton
var timeline = (function(){

	var fn = {};
	var scenes = [];
	//var time = 0;
	//var prevTime = 0;
	var timer;
	var scTime = 0;

	fn.position = function(update){
		//this function recieves time from the scPlayer and looks for
		//objects in the scene array with a time less that havent been played
		//console.log(update);
		scTime = update;
		//console.log('update: ', update, time);
		//$('#time')[0].value = scTime.toFixed(1);
		for(var i = 0, l = scenes.length; i < l; i++){
			var scene = scenes[i];
			if(!scene.played && scene.time <= scTime){
				//console.log('calling scene play for scene time: ', scene.time);
				scene.played = true;
				scene.action();	
			};	
		};
	};
	/*fn.start = function(){
		time = parseFloat($('#time')[0].value);
		timer = setInterval(function(){
			time += 0.3;
			for(var i = 0, l = scenes.length; i < l; i++){
				var scene = scenes[i];
				//need to rewrite this so when skipping the head it doesnt play everything
				if(!scene.played && scene.time <= time){
					if(prevTime < time - 2){
						//skipped so just mark it
						scene.played = true;
					} else {
						scene.played = true;
						scene.action();
					}
				}l
			};
			prevTime = time;
		}, 300);
	};
	fn.stop = function(){
		clearInterval(timer);	
	};
	fn.reset = function(){
		fn.stop();
		time = 0;
		for(var i = 0, l = scenes.length; i < l; i++){
			var scene = scenes[i];
			scene.played = false;
		};
		fn.start();	
	};*/

	//add scenes to timeline
	fn.addScene = function(scene){
		if(scene instanceof Scene){
			scenes.push(scene);	
		}
	};

	//pull js in and apply to timeline
	fn.addTimeline = function(){
		var obj;
		var latestScene;
		$.getScript('js/timeline.js', function(data, textStatus){
			obj = window.sequence;
			//clear scenes to redo timeline
			scenes = [];
			for(var key in obj){
				var scene = new Scene(key, obj[key]);
				fn.addScene(scene);
				if(scene.time <= scTime){
					scene.played = true;
					latestScene = scene;
				}
			};
			if(scTime > 0){
				latestScene.action();
			};
		});
	};

	return fn;

})();
timeline.addTimeline();

//fx functions - in any other project 
//these would be better namespaced
var rowOffset = function(index){
	var row = Math.floor(index / 18);
	var rowOffset = row * 46 * -1;
	return rowOffset;
};

var colOffset = function(index){
	var column = Math.floor(index % 18);
	var colOffset = column * 46 * -1;
	return colOffset;
};

var wave = function(selector, callback){
	var i = 0;
	var count = 0;
	var variance = 20;
	$(selector).each(function(){
		i += variance;
		var el = this;
		setTimeout(function(){
			//callback is called with element, index
			if(typeof callback === 'function'){
				callback(el, count);
			};
			count++;
		}, i);
	});
};

var backWave = function(selector, callback){
	var elements = $(selector);
	var variance = 20;
	var i = 0;
	for(var j = elements.length; j >= 0; j--){
		i += variance;
		var el = elements[j];
		(function(target, count){
			setTimeout(function(){
				callback(target, count);
			}, i);		
		})(el, j);
	};
};

var allAtOnce = function(selector, face){
	$(selector).each(function(){
		$(this).removeClass().addClass('cube').addClass(face);	
	});
};

var randomWave = function(selector, callback){
	//executes callback on all elements in collection in random wave order
	var elements = $(selector);
	var variance = 1500;

	for(var j = elements.length; j >= 0; j--){
		(function(element, count){
			setTimeout(function(){
				callback(element,count);
			}, Math.floor(Math.random() * variance));	
		})(elements[j], j);
	};
};

var fadeOutAll = function(){
	wave('.cube', function(el, index){
		//$(el).removeClass().addClass('cube move-out ' + speed);
		$(el).animate({'opacity' : '0.25'}, 500);
	});
};

var fadeInAll = function(){
	wave('.cube', function(el, index){
		//$(el).removeClass().addClass('cube move-out ' + speed);
		$(el).animate({'opacity' : '1'}, 500);
	});
};
var hideEmpty = function(){
	backWave('.empty-front .cube', function(el,index){
		$(el).animate({'opacity': '0'}, 500);
	});
};
var showEmpty = function(){
	backWave('.empty-front .cube', function(el,index){
		$(el).animate({'opacity': '1'}, 500);
	});
};
//reset to front
var resetToFront = function(speed){
	wave('.cube', function(el, index){
		$(el).removeClass().addClass('cube show-front ' + speed);
		$(el).animate({'opacity': '1'}, 500);
	});
};
var resetToBack = function(speed){
	wave('.cube', function(el, index){
		$(el).removeClass().addClass('cube move-out ' + speed);
		$(el).animate({'opacity': '1'}, 500);
	});
};

var removeImage = function(){
	wave('.cube', function(el, index){
		//make sure the element info is off for images		
		$(el).children('.front').css({
			"background-position-x" : '0px',
			"background-position-y" : '0px',
			"background-image" : 'none',
			"background-repeat" : 'no-repeat',
			"opacity" : 'inherit'
		});
		$(el).find('.element-info').animate({'opacity' : '1'}, 250);
	});	
};

var waveImage = function(image){
	wave('.cube', function(el, index){
		//make sure the element info is off for images		
		$(el).children('.front').css({
			"background-position-x" : colOffset(index) + 'px',
			"background-position-y" : rowOffset(index) + 'px',
			"background-image" : 'url(img/' + image + ')',
			"background-repeat" : 'no-repeat',
			"opacity" : '1'
		});
		$(el).find('.element-info').animate({'opacity' : '0'}, 250);
	});
};

$(document).ready(function(){

	//bind to time updates
	$(document).bind('onMediaTimeUpdate.scPlayer', function(event){
		timeline.position(event.position / 1000);
	});
	
	if(!Modernizr.csstransforms3d){
		$('#no-transforms').css({'display': 'block'});
	}

	//bind to sound cloud player init
	/*$(document).bind('onPlayerInit.scPlayer', function(event){
  		console.log(event.target, 'is ready!');
	});*/

	/*$(document).bind('onPlayerPlay.scPlayer', function(event){
  		console.log(event.target, 'its playing!');
  		//timeline.start();
	});*/

	//fake timer so i dont have to hear the track and pull from sc	
	/*$('#play').click(function(){
		timeline.start();
	});

	$('#pause').click(function(){
		timeline.stop();
	});

	$('#reset').click(function(){
		timeline.reset();
	});

	$('div').click(function(){
		console.log('wassup');
		timeline.addTimeline();
	});*/

});