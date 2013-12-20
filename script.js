var surpLayer = new Kinetic.Layer();
var borderLayer = new Kinetic.Layer();
var treeLayer = new Kinetic.Layer();
var firstPresentLayer = new Kinetic.Layer();
var secPresentLayer = new Kinetic.Layer();
var thirdPresentLayer = new Kinetic.Layer();
var starLayer = new Kinetic.Layer();
var signLayer = new Kinetic.Layer();
var signGroup;
var firstPresent;
var treeGroup;
var surpElement;
var stage;

window.onload = function() {
	stage = new Kinetic.Stage({
		container: 'container',
		width: 1024,
		height: 650
	});	
	
	var backgroundLayer = new Kinetic.Layer();
	
	signGroup = new Kinetic.Group({
		x: 600,
		y: 550
	});
	
	treeGroup = new Kinetic.Group({
		x: 175,
		y: 210
	});
	
	firstPresent = new Kinetic.Group({
		x: 195,
		y: 400
	});
	
	var secondPresent = new Kinetic.Group({
		x: 675,
		y: 480
	});
	
	var thirdPresent = new Kinetic.Group({
		x: 330,
		y: 420
	});
		
	// first present
	var presentShadow = new Kinetic.Blob({
		points: [{x: -3, y: 180}, {x: 25, y:170}, {x: 85, y:180}, {x: 25, y: 190}],
		fill: 'black',
		tension: 0.6
	});
	firstPresent.add(presentShadow);
	
	var presentBox = new Kinetic.Rect({
		x: 0,
		y: 100,
		width: 80,
		height: 80,
		fill: 'yellow'
	});
	
	var wrap = new Kinetic.Line({
		points: [40, 182, 40, 98],
		stroke: 'red',
		strokeWidth: 10
	});
	firstPresent.add(presentBox);
	firstPresent.add(wrap);
	
	wrap = new Kinetic.Line({
		points: [-2, 140, 82, 140],
		stroke: 'red',
		strokeWidth: 10
	});
	firstPresent.add(wrap);
	
	wrap = new Kinetic.Blob({
		points: [{x: 40, y: 97}, {x: 25, y:75}, {x: 5, y:85}, {x: 40, y: 100}, {x: 60, y: 80}, {x: 75, y: 90}],
		stroke: 'red',
		strokeWidth: 6,
		tension: 0.6
	});
	firstPresent.add(wrap);
	
	firstPresent.on('mousedown', function(){
		showSurprise();
	});

	firstPresentLayer.add(firstPresent);
	
	// Second Present
	presentShadow = new Kinetic.Blob({
		points: [{x: -5, y: 130}, {x: 62, y:123}, {x: 125, y:130}, {x: 62, y: 140}],
		fill: 'black',
		tension: 0.6
	});
	secondPresent.add(presentShadow);
	
	presentBox = new Kinetic.Rect({
		x: 0,
		y: 10,
		width: 120,
		height: 120,
		fill: 'blue'
	});
	
	var wrap = new Kinetic.Line({
		points: [60, 8, 60, 132],
		stroke: 'green',
		strokeWidth: 18
	});
	secondPresent.add(presentBox);
	secondPresent.add(wrap);
	
	wrap = new Kinetic.Line({
		points: [-2, 70, 122, 70],
		stroke: 'green',
		strokeWidth: 18
	});
	secondPresent.add(wrap);
	
	wrap = new Kinetic.Blob({
		points: [{x: 60, y: 8}, {x: 20, y:-5}, {x: 10, y:10}, {x: 60, y: 8}, {x: 105, y: 12}, {x: 75, y: 0}],
		stroke: 'green',
		strokeWidth: 10,
		tension: 0.6
	});
	secondPresent.add(wrap);
	
	secPresentLayer.add(secondPresent);
	
	// Third Present
	presentShadow = new Kinetic.Blob({
		points: [{x: 55, y: 100}, {x: 80, y:90}, {x: 105, y:100}, {x: 80, y: 105}],
		fill: '#111111',
		tension: 0.6
	});
	thirdPresent.add(presentShadow);
	
	presentBox = new Kinetic.Rect({
		x: 60,
		y: 60,
		width: 40,
		height: 40,
		fill: 'black'
	});
	
	var wrap = new Kinetic.Line({
		points: [80, 59, 80, 101],
		stroke: 'gray',
		strokeWidth: 4
	});
	thirdPresent.add(presentBox);
	thirdPresent.add(wrap);
	
	wrap = new Kinetic.Line({
		points: [59, 80, 101, 80],
		stroke: 'gray',
		strokeWidth: 4
	});
	thirdPresent.add(wrap);
	
	wrap = new Kinetic.Blob({
		points: [{x: 80, y: 60}, {x: 70, y:55}, {x: 55, y:70}, {x: 80, y: 60}, {x: 105, y: 60}, {x: 100, y: 70}],
		stroke: 'gray',
		strokeWidth: 2,
		tension: 3.5
	});
	thirdPresent.add(wrap);
	
	thirdPresentLayer.add(thirdPresent);
	
	// Star
	var christmasStar = new Kinetic.Star({
		x: 300,
		y: 205,
		numPoints: 5,
		innerRadius: 30,
		outerRadius: 75,
		fill: 'yellow',
		stroke: '#DEDEDE',
		strokeWidth: 2
	});
	starLayer.add(christmasStar);
	
	// Background
	var backImage = new Image();
	backImage.onload = function () {
		var back = new Kinetic.Image({
			x: 0,
			y: 0,
			image: backImage,
			width: 1024,
			height: 650
		});
		backgroundLayer.add(back);
		stage.add(backgroundLayer);
		loadTree();
	};
	backImage.src = "./Images/christmasBack.jpg";
	
	setTimeout('addBorder()', 350);
	setTimeout('addSurprise()', 300);
	
	
	// -------------------- Animations --------------------------------
	
	var starAnim = new Kinetic.Animation(function(frame) {
		var period = 4000;
		var scale = Math.sin(frame.time * 2 * Math.PI / period) + 0.001;
		christmasStar.setScale(scale, 1);
	}, starLayer);
	starAnim.start();
	
	var presentAnim = new Kinetic.Animation(function(frame){
		var amplitude = 3;
		var period = 100;
		firstPresent.setX(amplitude*Math.sin(frame.time * 2 * Math.PI / period) + 210);
	}, firstPresentLayer);
	presentAnim.start();
	
	var signAnim = new Kinetic.Animation(function(frame){
		var amplitude = 150;
		var period = 10000;
		signGroup.setX(amplitude*Math.sin(frame.time * 2 * Math.PI / period) + 250);
	}, signLayer);
	signAnim.start();
};

function loadTree()
	{
		var treeImage = new Image();
		treeImage.onload = function () {
			var treeShadow = new Kinetic.Blob({
				points: [{x: 80,y: 345}, {x: 120,y:340}, {x: 160, y: 345}, {x: 120,y:355}],
				fill: 'black',
				tension: 0.6
			});
			treeGroup.add(treeShadow);
			
			var tree = new Kinetic.Image({
				x: 0,
				y: 0,
				image: treeImage,
				width: 250,
				height: 350
			});
			treeGroup.add(tree);
			
			treeLayer.add(treeGroup);
			stage.add(treeLayer);
			
			addLayers();
		};
		treeImage.src = "./Images/christmasTree.png";
	}

function addBorder()
{
	var borderImage = new Image();
	borderImage.onload = function () {
		var border = new Kinetic.Image({
			x: 0,
			y: 0,
			image: borderImage,
			width: 1024,
			height: 650
		});
		borderLayer.add(border);
		stage.add(borderLayer);
		stage.add(firstPresentLayer);
		
		
		var signImage = new Image();
		signImage.onload = function() {
			var sign = new Kinetic.Image({
				x: 130,
				y: 0,
				image: signImage,
				width: 200,
				height: 100
			});
			signGroup.add(sign);
			
			var signText = new Kinetic.Text({
		        x: 0,
		        y: 40,
		        text: 'Por C.A.G.',
		        fontSize: 25,
		        fontFamily: 'Helvetica',
		        fill: 'white'
		      });			
			signGroup.add(signText);
			
			signText = new Kinetic.Text({
		        x: 350,
		        y: 40,
		        text: '... Abre el regalo...',
		        fontSize: 25,
		        fontFamily: 'Helvetica',
		        fill: 'white'
		      });			
			signGroup.add(signText);
			
			signLayer.add(signGroup);
			stage.add(signLayer);
			
		};
		signImage.src = "./Images/christmasSign.png";
		
	};
	borderImage.src = "./Images/christmasBorder.png";
}

function addSurprise()
{
	var surpImage = new Image();
	surpImage.onload = function () {
		surpElement = new Kinetic.Image({
			x: 10,
			y: 5,
			image: surpImage,
			width: 1005,
			height: 640,
			visible: false
		});
		surpLayer.add(surpElement);
		stage.add(surpLayer);
	};
	surpImage.src = "./Images/christmasRandom.jpg";
}

function addLayers() {
	stage.add(secPresentLayer);
	stage.add(thirdPresentLayer);
	stage.add(starLayer);
}

function showSurprise()
{
	signGroup.hide();
	signLayer.draw();
	firstPresent.hide();
	firstPresentLayer.draw();
	surpElement.show();
	surpLayer.draw();
	setTimeout('removeSurprise()', 7500);
}

function removeSurprise()
{
	firstPresent.show();
	firstPresentLayer.draw();
	surpElement.hide();
	surpLayer.draw();
}
