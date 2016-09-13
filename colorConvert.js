var player = {color : {
	red : 60 , green : 128 , blue : 240, alpha : 0,
	cyan : 0 , magenta : 0, yellow : 0, black : 0,
	hue : 0 , saturation : 0, value : 0
	}
}
function colorConvert(baseType){
	var returnColor = {
	red : 0 , green : 0 , blue : 0,
	cyan : 0 , magenta : 0, yellow : 0, black : 0,
	hue : 0 , saturation : 0, value : 0
	}
	var color = player.color
	if(baseType == 'rgb' || baseType == 'cmyk'){
		if(baseType == 'rgb' ){
		var red = color.red/255;
		var green = color.green/255;
		var blue = color.blue/255;
		var colorMax = Math.max(red,green,blue);
		var colorMin = Math.min(red,green,blue);
		var black = (1 - colorMax);
		returnColor.cyan = Math.round((1 - red - black) / ( 1 - black)*255);
		returnColor.magenta = Math.round((1 - green - black) / ( 1 - black)*255);
		returnColor.yellow = Math.round((1 - blue - black) / ( 1 - black)*255);
		returnColor.black = Math.round(black * 255)
		var delta = colorMax - colorMin;
		}
		else if( baseType == 'cmyk'){
		var black = color.black/255;
		var cyan = color.cyan/255;
		var magenta = color.magenta/255;
		var yellow = color.yellow/255;
		var red = ( 1 - cyan ) * ( 1 - black );
		var green = ( 1 - magenta ) * ( 1 - black );
		var blue = ( 1 - yellow ) * ( 1 - black );
		var colorMax = Math.max(red,green,blue);
		var colorMin = Math.min(red,green,blue);
		var delta = colorMax - colorMin;
			returnColor.cyan = color.cyan
			returnColor.magenta = color.magenta
			returnColor.yellow = color.yellow
			returnColor.black = color.black
		}
		var hue = 0;
		var saturation = 0;
		var value = 0;
		if( delta == 0 ){
			hue = 0;
		}
		else if( colorMax == red ){
			hue=((green-blue)/delta)%6;
		}
		else if( colorMax == green){
			hue = (blue - red)/delta+2;
		}
		else if( colorMax == blue){
			hue = (red - green)/ delta  +4;
		}
		hue *= 60
		if( hue < 0 ){
			hue +=360;
		}
		value = colorMax;
		if( colorMax == 0 ){
			saturation = 0;
		}
		else {
			saturation = delta / colorMax;
		}
		saturation *= 100;
		value *= 100;
		returnColor.saturation = Math.round(saturation*10)/10
		returnColor.value = Math.round(value*10)/10;
		returnColor.hue = Math.round(hue*10)/10
		returnColor.red = Math.round(red*255)
		returnColor.green = Math.round(green*255)
		returnColor.blue = Math.round(blue*255)
		return returnColor 
	}

	else if( baseType == 'hsv'){
		var hue = color.hue/60;
		var saturation = color.saturation/100;
		var value =color.value/100;
		var chroma = value * saturation;
		var x = chroma * ( 1 - Math.abs( hue%2 -1 ));
		var m = value - chroma
		var red = 0;
		var green = 0;
		var blue = 0 ;
		switch(Math.floor(hue)){
			case 0 : 
			red = chroma;
			green = x;
			break ; 
			case 1 : 
			green = chroma;
			red = x;
			break ; 
			case 2 : 
			green = chroma;
			blue = x;
			break ; 
			case 3 : 
			blue = chroma;
			green = x;
			break ; 
			case 4 : 
			blue = chroma;
			red = x;
			break ; 
			case 5 : 
			red = chroma;
			blue = x;
			break ; 
		}
		red  = (red + m);
		green = (green + m);
		blue = (blue + m);
		var colorMax = Math.max(red,green,blue);
		var colorMin = Math.max(red,green,blue);
		returnColor.red  = Math.round(red*255);
		returnColor.green = Math.round(green*255);
		returnColor.blue = Math.round(blue*255);
		var black = (1 - colorMax);
		returnColor.cyan = Math.round((1 - red - black) / ( 1 - black)*255);
		returnColor.magenta = Math.round((1 - green - black) / ( 1 - black)*255);
		returnColor.yellow = Math.round((1 - blue - black) / ( 1 - black)*255);
		returnColor.black =Math.round( black * 255)
		returnColor.saturation = color.saturation
		returnColor.value = color.value;
		returnColor.hue = color.hue
		return returnColor 
	}

}
