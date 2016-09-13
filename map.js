var map=[];
var turn = 0;
var start = {x : 0, y : 0};
var exit= {x : 0, y : 0};
var player = {x : 0, y : 0, sigth : 3}
var solve= [];
function createMap(){
	function clearMap(){
      return [];
    }
	function calculrateCount(length){
    var count = Math.floor(Math.ceil(length/5)/2)*2+1;
    var center = Math.floor(length/2)
    var minus = center - (Math.ceil(count/2)-1)*5;
    var counter = [];
    for(var i =0 ; i< count; i++){
      if( i % 2 === 1){
        counter[i] = Math.floor(count/2 - Math.ceil(i/2))*5+minus;
      }
      else if( i % 2 === 0){
        counter[i] = Math.floor(count/2 + Math.ceil(i/2))*5+minus;
      }
    }
    return counter;
  }
	function createArea(x,y){
		for(var i = -1 ; i < 2 ; i++){
			if(map[y-i]){
				for(var j = -1 ; j <2 ; j++){
					if(i != 0 || j !=0){
					if(map[y-i][x-j]){
						map[y-i][x-j] = 0;
						}
					}
				}
			}
		}
	}
	map=clearMap();
	var x=document.getElementById('MapX').value;
	var y=document.getElementById('MapY').value;
	for(var i = 0 ; i < y ; i++){
		map[i] = []
		for(var j = 0 ; j < x ; j++){
			map[i][j] = Math.round(Math.random()*0.95);
		}
	}
	var countX = calculrateCount(x);
	var countXLength = countX.length;
	var countY = calculrateCount(y);
	var countYLength = countY.length;
	for( var k = 0; k<countYLength; k++){
	  var creatY = countY[k];
		for( var j = 0; j<countXLength; j++){
			var creatX = countX[j];
			creatTile(creatX,creatY,creatX,creatY);
			creatTile(creatX+2,creatY+1,creatX,creatY);
			creatTile(creatX-1,creatY+2,creatX,creatY);
			creatTile(creatX-2,creatY-1,creatX,creatY);
			creatTile(creatX+1,creatY-2,creatX,creatY);
		}
	}
  	var startX = Math.floor(Math.random()*(x))
	var startY = Math.floor(Math.random()*(y))
	var  exitX = Math.floor(Math.random()*(x))
	var  exitY = Math.floor(Math.random()*(y)) 
	while((startX +1 == exitX || startX  == exitX || startX -1 == exitX) && 
			(startY +1 == exitY || startY  == exitY || startY -1 == exitY)){
		exitX = Math.floor(Math.random()*(x-1)+1) 
		exitY = Math.floor(Math.random()*(y-1)+1) 
	}
	map[exitY][exitX] = 7;
	map[startY][startX] = 10;
	createArea(startX,startY);
	createArea(exitX,exitY);
	start.x=startX;
	start.y=startY;
	player.x=startX;
	player.y=startY;
	exit.x = exitX;
	exit.y = exitY;

}
function creatTile(x,y,rulerX,rulerY){
  function checkSeed(seed){
    var wall =[0,0,0,0,0]//center top left bottom rigth
    if(seed%2 == 1){
      wall[1] = 1;
    }
    if(Math.floor(seed/2)%2==1){
      wall[2] = 1;
    }
    if(Math.floor(seed/4)%2==1){
      wall[3] = 1;
    }
    if(Math.floor(seed/8)%2==1){
      wall[4] = 1;
    }
    return wall;
  }
  var top = false;
  var bottom = false;
  var rigth = false;
  var left = false;
  var lengthX=map[0].length;
  var lengthY=map.length;
  if(rulerY < y && (rulerX>-1 && rulerX<lengthX && rulerY+1<lengthY && rulerY+1>-1)){
    top = map[rulerY+1][rulerX];
  }
  if(rulerY > y && (rulerX>-1 && rulerX<lengthX&& rulerY-1<lengthY  && rulerY-1>-1)){
     bottom = map[rulerY-1][rulerX];
  }
  if(rulerX < x && (rulerX+1>-1 && rulerX+1<lengthX && rulerY<lengthY && rulerY>-1)){
    rigth = map[rulerY][rulerX+1]
  }
  if(rulerX > x && (rulerX-1>-1 && rulerX-1<lengthX && rulerY<lengthY && rulerY>-1)){
    left = map[rulerY][rulerX-1];
  }
  var seed = Math.floor(Math.random()*16);
  var wall = checkSeed(seed);
  if(x>-1&& x<lengthX){
    if(y>-1 && y<lengthY){
      map[y][x]=wall[0]
    }
    if(y+1>-1 && y+1<lengthY){
      map[y+1][x]=wall[1]
    }
    if(y-1>-1 && y-1<lengthY){
      map[y-1][x]=wall[3]
    }
  }
  if(y>-1 && y<lengthY){
    if(x-1>-1&& x-1<lengthX){
      map[y][x-1]=wall[2];
    }
    if(x+1>-1&& x+1<lengthX){
      map[y][x+1]=wall[4];
    }
  }
  if(top && rigth){
    if( top === 0 || rigth === 0 ){
      map[y][x-1] = 0;
    }
    if(rigth === 0 ){
      map[y-1][x] = 0;
    }
  }
  if(left && top){
    if( left === 0 || top === 0 ){
      map[y-1][x] = 0;
    }
    if(top === 0 ){
      map[y][x+1] = 0;
    }
  }
  if(bottom && left){
    if( bottom === 0 || left=== 0 ){
      map[y][x+1] = 0;
    }
    if(left === 0 ){
      map[y+1][x] = 0;
    }
  }
  if(rigth && bottom){
    if( rigth === 0 || bottom === 0 ){
      map[y+1][x] = 0;
    }
    if(bottom === 0 ){
      map[y][x-1] = 0;
    }
  }
}
function drawMap(){
  var x = map[0].length;
  var y = map.length;
  var inner = ''
  var Map = document.getElementById('Map');
  for(var i = 0 ; i<y ; i++){
    inner += '<div style="display: flex;">'
    for(var j = 0 ; j<x ; j++){
      inner +='<div'
		if(i != player.y || j != player.x){
			if(map[i][j] === 1){
				inner += ' class="wall"></div>'
			}
			else if(map[i][j]=== 7){
				inner += ' class="exit"></div>'
			}
			else if(map[i][j]=== 10){
				inner += ' class="start"></div>'
			}
			else{
				inner += ' class="road"></div>'
			}
		}
		 else if (i == player.y && j == player.x){
			 inner += ' class="player"></div>'
		 }
	 }
    inner +='</div>'
  }
  Map.innerHTML = inner;
	inner = ''
	var Solve = document.getElementById('Solve');
	for(var i = 0 ; i<y ; i++){
    inner += '<div style="display: flex;">'
    for(var j = 0 ; j<x ; j++){
      inner +='<div'
		if(i != player.y || j != player.x){
			if(solve[i][j] === 15){
				inner += ' class="fog"></div>'
			}
			else if(solve[i][j] === 1){
				inner += ' class="wall"></div>'
			}
			else if(solve[i][j]=== 7){
				inner += ' class="exit"></div>'
			}
			else if(solve[i][j]=== 10){
				inner += ' class="start"></div>'
			}
			else{
				inner += ' class="road"></div>'
			}
		}
		 else if (i == player.y && j == player.x){
			 inner += ' class="player"></div>'
		 }
	 }
    inner +='</div>'
  }
  Solve.innerHTML = inner;
}
function changeMap(repeatCount){
	function calculrateCount(length){
		var count = Math.floor(length/3);
		var returnValue = [];
		for( var i =0 ; i< 3;  i++){
			for(var j = 0 ; j < count ; j++){
				returnValue[j + i * count] = j * 3 + i; 
			}
		}
		return returnValue
	}
	if(!repeatCount){
		repeatCount= 1;
	}
	var update = [];
	var x = map[0].length;
	var y = map.length;
	for( var i = 0 ; i< y ; i++){
		update[i]=[];
		for( var j = 0 ; j < x ; j++){
			update[i][j] = map[i][j]
		}
	}
	var countX = calculrateCount(x)
	var countXLength = countX.length;
	var countY = calculrateCount(y)
	var countYLength = countY.length;
	for( var h = 0 ; h<repeatCount; h++){
		for( var i = 0 ; i< countYLength; i++){
		for( var j = 0 ; j < countXLength; j++){
			if((countY[i] != start.y || countX[j] != start.x) && (countY[i] != exit.y || countX[j] != exit.x) ){
				var wallCheck = 7-Math.floor(Math.random()*3);
				var wallCount = 0 ;
				//var wallStack = [[],[],[]]
				if(map[countY[i]-1]){					
					if(map[countY[i]-1][countX[j]-1] && map[countY[i]-1][countX[j]-1] === 1){
					//	wallStack[0][0] = map[countY[i]-1][countX[j]-1]
						wallCount += 1;
					}
					if(map[countY[i]-1][countX[j]] && map[countY[i]-1][countX[j]] === 1){
					//	wallStack[0][1] = map[countY[i]-1][countX[j]]
						wallCount += 1;
					}
					if(map[countY[i]-1][countX[j]+1] && map[countY[i]-1][countX[j]+1] === 1){
					//	wallStack[0][2] = map[countY[i]-1][countX[j]+1]
						wallCount += 1;
					}
				}
				if(map[countY[i]]){
					if(map[countY[i]][countX[j]-1] && map[countY[i]][countX[j]-1] === 1){
					//	wallStack[1][0] = map[countY[i]][countX[j]-1]
						wallCount += 1;
					}
					if(map[countY[i]][countX[j]] && map[countY[i]][countX[j]] === 1){
					//	wallStack[1][1] = map[countY[i]][countX[j]]
						wallCount += 1;
					}
					if(map[countY[i]][countX[j]+1] && map[countY[i]][countX[j]+1] === 1){
					//	wallStack[1][2] = map[countY[i]][countX[j]+1]
						wallCount += 1;
					}
				}
				if(map[countY[i]+1]){
					if(map[countY[i]+1][countX[j]-1] && map[countY[i]+1][countX[j]-1] === 1){
					//	wallStack[2][0] = map[countY[i]+1][countX[j]-1]
						wallCount += 1;
					}
					if(map[countY[i]+1][countX[j]] && map[countY[i]+1][countX[j]] === 1){
					//	wallStack[2][1] = map[countY[i]+1][countX[j]]
						wallCount += 1;
					}
					if(map[countY[i]+1][countX[j]+1] && map[countY[i]+1][countX[j]+1] === 1){
					//	wallStack[2][2] = map[countY[i]+1][countX[j]+1]
						wallCount += 1;
					}
				}
				if(wallCount >= wallCheck){
					update[countY[i]][countX[j]] = 1;
				}
				else if(wallCount <= 2){
					update[countY[i]][countX[j]] = 0;
				}					
			}
		}
	}
	map = update;
	}
}
function makeMap(type){
	switch(type){
		case 'creat' :
			createMap();
			creatFog();
			checkSight()
			drawMap();
			break;
		case 'change' :
			changeMap();
			creatFog();
			checkSight()
			drawMap();
			break;
		case 'change4' :
			changeMap(4);
			creatFog();
			checkSight()
			drawMap();
			break;
		case 'creatchange4' :
			createMap();
			changeMap(4);
			creatFog();
			checkSight()
			drawMap();
			break;
		case 'creatchange10' :
			createMap();
			changeMap(10);
			creatFog();
			checkSight()
			drawMap();
			break;
	}
	turn = 0;
	document.onkeypress=moveMap
}
function moveMap(evt){
	var x =player.x
	var y =player.y
	var lengthX=map[0].length;
	var lengthY=map.length;
    var keyCode = evt.which?evt.which:event.keyCode;
	switch(keyCode){
		case  49 :
			if(y+1<lengthY&& x-1>-1){
				if(map[y+1][x-1] != 1){
					player.x -= 1;
					player.y += 1;
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}			
			turn += 1;			
			break;
		case 50 : 
			if(y+1<lengthY){
				if(map[y+1][x] != 1){
					player.y += 1;
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}	
			turn += 1;
			break;
		case 51 :			
			if(y+1<lengthY&& x+1<lengthX){
				if(map[y+1][x+1] != 1){
					player.x += 1;
					player.y += 1;
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}	
			turn += 1;
			break;
		case 52 :
			if(x-1>-1){
				if(map[y][x-1] != 1){
					player.x -= 1;
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}	
			turn += 1;
			break; 
		case 53 :
				turn += 1;
			console.log('stay')
			break;
		case 54 :
			if(x+1<lengthX){
				if(map[y][x+1] != 1){
					player.x += 1;
					turn += 1;
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}	
			turn +=1;
			break;
		case 55 :			
			if(y-1>-1&& x-1>-1){
				if(map[y-1][x-1] != 1){
					player.x -= 1;
					player.y -= 1;
				}
				else{
					console.log('wall');
				}
			}			
			else{
				console.log('out');
			}	
			turn += 1;
			break;		
		case 56 :			
			if(y-1>-1){
				if(map[y-1][x] != 1){
					player.y -= 1;
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}	
			turn += 1;
			break;
		case 57 :			
			if(y-1>-1&& x+1<lengthX){
				if(map[y-1][x+1] != 1){
					player.x += 1;
					player.y -= 1;					
				}
				else{
					console.log('wall');
				}
			}
			else{
				console.log('out');
			}	
			turn += 1;
			break;		
	}
	checkSight();
	document.getElementById('nowTurn').value = turn;
	drawMap();
	if(player.x == exit.x && player.y == exit.y){
				console.log('exitArea');
		var answer = confirm('End?');
		if(answer){	
				console.log('clear   '+ turn);
					makeMap('creatchange4');

		}
	}
	if(player.x == start.x && player.y == start.y && turn != 0 && keyCode != 53){
		console.log('startArea');
		var answer = confirm('reStart?');
		if(answer){	
			makeMap('creatchange4');
			console.log('reStart')
		}
		
	}
}
function creatFog(){
	var x = map[0].length;
	var y = map.length;
	for(var i = 0 ; i < y ; i++){
		solve[i] = []
		for(var j = 0 ; j < x ; j++){
			if((start.x != j || start.y !=i)&&(exit.x != j || exit.y != i)){
			solve[i][j] = 15
		}
		else{
			if(start.x == j && start.y ==i){
			solve[i][j] = 10;
			}
			if(exit.x == j && exit.y == i){
				solve[i][j] = 7;
			}
		}
		}
	}
}
function checkSight(){
	var sigth = player.sigth/2;
	var sigthMin = Math.floor(sigth);
	var sigthMax = Math.ceil(sigth+1);
	var x = player.x;
	var y = player.y;
	var lengthX = map[0].length;
	var lengthY = map.length;
	for(var i = -sigthMin; i<sigthMax; i++){
		if(y+i<lengthY && y+i > -1){
			for(var j = -sigthMin ; j<sigthMax; j++ ){
				if(x+j<lengthX && x+j > -1){
					var length = Math.sqrt(Math.pow(i,2)+Math.pow(j,2));
					if(length <= sigth){
						solve[y+i][x+j] = map[y+i][x+j]
					}
				}
			}
		}
	}
}
