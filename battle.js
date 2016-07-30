function checkOnData(){
	var onData = [];
	for(var i = 0; i < 24; i++){
		if(battleCharacter[i] != null){
			onData[battleCharacter[i].ally][battleCharacter[i].ally.length] = battleCharacter[i];
		} //ally  0 = Enemy(none Ally) , 1 = playerCharacter, 2~ = Enemy(Same number Ally)
	}
	return onData;
}

function creatGaugeStock(data){
	var gaugeStock = [];
	for(var i = 0; i < data.length; i++){
		for( var j = 0; j<data[i].length; j++){
			gaugeStock[i][j] = 0;
		}
	}
	return gaugeStock;
}

function creatGaugeAddValue(data){
	var guageAddValueStock = [];
	for(var i = 0; i < data.length; i++){
		for( var j = 0; j<data[i].length; j++){
			guageAddValueStock[i][j] = calculrationGuageFillValue(data[i][j].speed);
		}
	}
	return guageAddValueStock;
}

function calculrationGuageFillValue(speed){
	var fillValue = 0;
	fillValue = speed * 100;
	if(fillValue <= 0){
	fillValue = 1;
	}
	return fillValue;
}

function checkGuage(){
	var stock = guageStock;
	var fillValue = guageAddValueStock;
	var data = onData;
	for( var i = 1; i < data.length; ){
		for( var j = 0; j < data[i].length; j++){
			if(data[i][j].now.hp > 0){
				stock[i][j] += fillValue[i][j]; //UI 반영(게이지 증가)
				if(stock[i][j] >= 10000){
					if( i == 1 ){
						if( !data[i][j].aria.skill ){
							document.getElementById('player'+j).disabled = false;
						}
						else if( data[i][j].aria.skill){
							//스킬발동
						}
					}
					else{
						if( !data[i][j].aria.skill ){
							var skill = selectSkill(data[i][j]);
							skillCheck(data[i][j], stock[i][j], skill);
						}
						else if( data[i][j].aria.skill){
							//스킬발동
						}
					}
				}
			}


			else{
			stock[i][j] = 0 ;
			}
			if(i == 0 ){
				i += 2;
			}
			else if( i == 1 ){
				i -= 1;
			}
			else{
				i += 1;
			}
		}

	}
}

function selectSkill(performer){
	if( performer.alliy != 1){
		var skill = checkPattern(performer.pattern);
		return skill;
	}
	else if( performer.alliy == 1){
		//버튼 입력
	}
}

function checkSkill(performer, gaugeStock, skill){
	var cost = checkSkillCost(performer, skill);

	function checkSkillCost(perforemr, skill){
		var cost = skill.cost 
		var giveCost = performer.now
		//{ hp : --, mana : --, stamina : --}
		if( ( cost.hp == 0 || cost.hp <= giveCost.hp) && ( cost.mana == 0 || cost.mana <= giveCost.mana) && ( cost.stamina == 0 || cost.stamina <= giveCost.stamina) ){
			return [1,{ hp : giveCost.hp-cost.hp, mana : giveCost.mana-cost.mana, stamina : giveCost.stamina-cost.stamina} ];
		}
		else{
			var failReason = [0,{ hp : 'success', mana : 'success', stamina : 'success'} ];
			if(cost.hp > giveCost.hp){
				fail[1].hp = 'fail'
			}
			else if(cost.mana > giveCost.mana){
				fail[1].mana = 'fail'
			}
			else if(cost.stamina > giveCost.stamina){
				fail[1].stamina = 'fail'
			}
			return fail;
		}
	}
	if( cost[0] == 1 ){
		performer.now = cost[1];
	}
	else{
		var failType = '';
		if( cost[1].hp == 'fail'){
			failType += '체력'
		}
		else if( cost[1].mana == 'fail' ){
			if( failType == ''){
				failType += '마나';
			}
			else{
				failType += ',마나';
			}
		}
		else if( cost[1].stamina == 'fail' ){
			if( failType == ''){
				failType += '스테미나';
			}
			else{
				failType += ',스테미나';
			}
		}
		var failMessage = failType + '가 부족합니다.'
		return failMessage;
	}

	checkSkillCast(performer, gaugeStock, skill);
	
	function checkSkillCast(performer, stock, skill){
		if(skill.delay.first != 0){
			performer.aria.skill = skill;
			performer.aria.kind = skill.aria.kind;
			stock -= skill.aria.delay;
			//UI 반영(게이지 감소)
		}
	}

}
