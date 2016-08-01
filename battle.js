var battleCharacter = [
{ onName : 'Test ally00', range : 1, coordinates : { x : 0, y : 0 },critical : 10, attack : 3, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 150 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally01', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 15 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally02', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 19 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally03', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 18 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally04', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 17 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally05', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 16 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally06', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 13 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally07', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 12 , ally : 0 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally20', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 11 , ally : 2 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally21', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 9 , ally : 2 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally22', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 8 , ally : 2 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally23', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 7 , ally : 2 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}},
{ onName : 'Test ally24', range : 1, coordinates : { x : 1, y : 1 },critical : 10, attack : 1, defense : 1, now : {hp : 100, mana : 50, stamina : 50} , speed : 6 , ally : 2 ,aria : {type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, delay : {first : 0, last : 0},cost : {hp : 10, mana : 0, stamina : 0}}}


];

var onData = checkOnData();
var gaugeStock = creatGaugeStock(onData);
var gaugeAddValueStock = creatGaugeAddValue(onData)

function checkOnData(){
	var onData = [[],[],[]];
	for(var i = 0; i < battleCharacter.length; i++){
		if(battleCharacter[i] != null){
			if(!onData[battleCharacter[i]['ally']]){
				onData[battleCharacter[i]['ally']] = [];
			}
			onData[battleCharacter[i]['ally']][onData[battleCharacter[i]['ally']].length] = battleCharacter[i];
		} //ally  0 = Enemy(none Ally) , 1 = playerCharacter, 2~ = Enemy(Same number Ally)
	}
	return onData;
}

function creatGaugeStock(data){
	var gaugeStock = [];

	for(var i = 0; i < data.length; i++){

		if(!gaugeStock[i]){
			gaugeStock[i] = [];
		}
		if(data[i]){
			for( var j = 0; j<data[i].length; j++){
				gaugeStock[i][j] = 0;
			}
		}
	}
	return gaugeStock;
}

function creatGaugeAddValue(data){
	var guageAddValueStock = [];
	for(var i = 0; i < data.length; i++){

		if(!guageAddValueStock[i]){
			guageAddValueStock[i] = [];
		}
		if(data[i]){
			for( var j = 0; j<data[i].length; j++){
				guageAddValueStock[i][j] = calculateGuageFillValue(data[i][j].speed);
			}
		}
	}
	return guageAddValueStock;
}

function calculateGuageFillValue(speed){
	var fillValue = 0;
	fillValue = speed * 100;
	if(fillValue <= 0){
	fillValue = 1;
	}
	return fillValue;
}

function checkGauge(){
	let stock = gaugeStock;
	let fillValue = gaugeAddValueStock;
	let data = onData;
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
							actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
						}
					}
					else{
						if( !data[i][j].aria.skill ){
							var skill = selectSkill(data[i][j]);
							checkSkill(data[i][j], stock[i][j], skill);
							if(stock[i][j] >= 10000){
							actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
							}
						}
						else if( data[i][j].aria.skill){
							actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
						}
					}
				}
			}


			else{
			stock[i][j] = 0 ;
			}
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

function selectSkill(performer){
	if( performer.alliy != 1){
		var skill = performer.skill//checkPattern(performer.pattern);
		return skill;
	}
	else if( performer.alliy == 1){
		//버튼 입력
	}
}

function checkSkill(performer, gaugeStock, skill){


	function checkSkillCost(perforemr, skill){ // 스킬 소모 자산 체크
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

	function checkSkillAria(performer, stock, skill){

			performer.aria.skill = skill;
		if(skill.delay.first != 0){
			performer.aria.kind = skill.aria.kind;
			stock -= skill.delay.first;
			//UI 반영(게이지 감소)
		}
	}
	var cost = checkSkillCost(performer, skill);
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


	
	checkSkillAria(performer, gaugeStock, skill);

}

function actionSkill(performer, skill, data, stock){


	function checkSkillTargeting(performer, skill, data){
	//skill.target = [ (0 = self, 1 = friend , 2 = enemy, 3 = all) , ( 0 = individual , 1= multi , 2 = all) ]
		if( skill.target[0] == 0 ){
			return [[performer]];
		}
		else if( skill.target[0] == 1){
			if( performer.ally != 0){
				return [data[performer.alliy]];
			}
			else{
				return [[performer]]
			}
		}
		else if( skill.target[0] == 2){
			var targetData = [];
			for( var i = 0; i < data.length; i++){
				if( i == 0 ){
					if( performer.ally == 0 ){
						targetData.push([]);
						for( var j = 0; j < data[0].length; j++){
							if( performer.onName != data[0][j].onName ){//무소속인 자기 자신을 제외
								targetData[0].push(data[0][j]);
							}
						}
					}
					// 무소속일때 판정
				}
				else{
					targetData.push(data[i]);
				}
			}
			return targetData;
		}
		else if( skill.target[0] == 3){
			return data;
		}
	}
	
	function checkRange(performer, skill, target){
		var rangeIn = [];
		var range = skill.range * performer.range
		var rangeCalculate = 0;
		for( var i = 0 ; i < target.length; i++){
		if(!rangeIn[i]){
			rangeIn[i] = [];
		}
			for( var j = 0; j < target[i].length; j++){
				rangeCalculate = Math.sqrt(Math.pow(performer.coordinates.x - target[i][j].coordinates.x,2)+Math.pow(performer.coordinates.y - target[i][j].coordinates.y,2));
				if( rangeCalculate <= range ){
					rangeIn[i][j] = rangeCalculate / range;
				}
			}
		}
		return rangeIn;
	}
	function selectTarget(skill,target){ //타겟 설정
		var allyDice = Math.floor(Math.random()*target.length); // 타겟이 되는 동맹 구분
		var targetDice = Math.floor(Math.random()*target[allyDice].length); // 해당 동맹에 속한 대상
		return [target[allyDice][targetDice],[allyDice,targetDice]];
	}

	function calculateSkillDamage(performer,skill){
		return performer.attack * skill.powerValue;
	}
	function calculateDefenseDamage(target,damage){
		return damage-target.defense;
	}
	function checkSkillDelay(performer, stock, skill){

			stock = skill.delay.last;
			//UI 반영(게이지 감소)
		
	}
	var target = checkSkillTargeting(performer, skill, data);
	var range = checkRange(performer, skill, target);
	
	if( skill.target[1] == 2){
		for( var h = 0; h < skill.hitNumber; h++){
			for( var i = 0; i < target.length; i++){
				for( var j = 0; j < target[i].length;){
					var hit = 0;
					if( range[i][j] <= 1 ){
						hit = checkHit(performer,skill,target[i][j])
					}
					else{
						hit = 0;
					} 
					if( hit >= 1 ){
						damage = calculateSkillDamage(performer,skill);
						var criticalDice = Math.random() * 100;
						if( criticalDice <= performer.critical){
							damage *= 2;
						}
						if(skill.damageType != 0){
						damage = calculateDefenseDamage(target[i][j],damage);
						}
						if(skill.damageType == 0){
						target[i][j].now.hp += damage;
						}
						else if(skill.damageType == 1){
						target[i][j].now.hp -= damage;
						}
						else if(skill.damageType == 2){
						target[i][j].now.mana -= damage;
						}
						else if(skill.damageType == 3){
						target[i][j].now.stamina -= damage;
						}
					}
				}
			}
		}
	}
	else if( skill.target[0] != 0 ){
		for( var h = 0; h < skill.hitNumber; h++){
			var hitTarget = selectTarget(skill,target);
			var hit = 0;
			if( range[hitTarget[1][0]][hitTarget[1][1]] <= 1 ){ // 거리판정
				hit = 1//checkHit(performer,skill,hitTarget[0])
			}
			else{
				hit = 0;
			} 
			if( hit >= 1 ){
				damage = calculateSkillDamage(performer,skill);
				var criticalDice = Math.random() * 100;
				if( criticalDice <= performer.critical){
					damage *= 2;
				}
				if(skill.damageType != 0){
				damage = calculateDefenseDamage(hitTarget[0],damage);
				}
				if(skill.damageType == 0){
				hitTarget[0].now.hp += damage;
				}
				else if(skill.damageType == 1){
				hitTarget[0].now.hp -= damage;
				}
				else if(skill.damageType == 2){
				hitTarget[0].now.mana -= damage;
				}
				else if(skill.damageType == 3){
				hitTarget[0].now.stamina -= damage;
				}
			}
		}
	}
	else if( skill.target[0] == 0){
		for( var h = 0; h < skill.hitNumber; h++){
			damage = calculateSkillDamage(performer,skill);
			var criticalDice = Math.random() * 100;
			if( criticalDice <= performer.critical){
				damage *= 2;
			}
			if(skill.damageType != 0){
			damage = calculateDefenseDamage(target[0][0],damage);
			}
			if(skill.damageType == 0){
			target[0][0].now.hp += damage;
			}
			else if(skill.damageType == 1){
			target[0][0].now.hp -= damage;
			}
			else if(skill.damageType == 2){
			target[0][0].now.mana -= damage;
			}
			else if(skill.damageType == 3){
			target[0][0].now.stamina -= damage;
			}
		}
	}
	checkSkillDelay(performer, stock, skill);
	
}
