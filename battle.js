var battleCharacter = [
{ onName : 'newObject', 
  max : {hp : 100, mana : 1000, stamina : 1000} ,
  now : {hp : 100, mana : 1000, stamina : 1000} , 
  stats : { str : 10, int : 10, dex : 10, spd : 10, luk : 10 },
  aria : { type : 0, skill : 0 },
  rate : { hit : 100, dodge : 10, critical : 10},
  baseOption : { attackPhysical : 5, attackMagic : 10, defensePhysicalPercent : 10, defensePhysicalNumber : 5, defenseMagicPercent : 0, defenseMagicNumber : 0},
  range : 1, 
  coordinates : { x : 0, y : 0 },
  critical : 10, 
  ally : 0 ,
  pattern : [['NS00101',10, 100001],['OT00000' , 0 , 100000 ]] },
{ onName : 'newOption', 
  max : {hp : 100, mana : 1000, stamina : 1000} ,
  now : {hp : 100, mana : 1000, stamina : 1000} , 
  stats : { str : 10, int : 10, dex : 10, spd : 10, luk : 10 },
  aria : { type : 0, skill : 0 },
  rate : { hit : 100, dodge : 10, critical : 10},
  baseOption : { attackPhysical : 10, attackMagic : 10, defensePhysicalPercent : 10, defensePhysicalNumber : 0, defenseMagicPercent : 0, defenseMagicNumber : 0},
  range : 1, 
  coordinates : { x : 0, y : 0 },
  critical : 10, 
  ally : 0 ,
  pattern : [['OT00000' , 0 , 100000 ]]
 }

 
];
var skillData = { 
100000 : {
 	code : 100000,
  	name : 'Attack',
  	target : [ 2, 0 ], // enemy - individual
 	cost : { hp : 0 , mana : 0 , stamina : 0 },
  	skillType : 'combat',  // 공격기술
  	range : 1 ,// 사정거리 1
  	hitCount : 1, // 1회 타격
  	power : [['attackPhysical' , 100]], // 물리공격력의 100%
  	defence : 0, // 방어 형태 물리
  	exp : '기본공격'
},
100001 : {
 	code : 100001,
  	name : 'TripleHit',
  	target : [ 2, 0 ],
 	cost : { hp : 0 , mana : 0 , stamina : 5 },
	delay : {first : 3000, last : 5000},
	delayType : 'Charge',
  	skillType : 'combat',  
  	range : 1.5 ,
  	hitCount : 3, // 1회 타격
  	power : [['attackPhysical' , 110]], // 물리공격력의 100%
  	defence : 1, // 방어 형태 물리
  	exp : '기본공격'

}
//200000 : {name : 'Earthquake', damageType : 1, hitCount : 4, range : 20, target : [2,2], powerValue : 10,  aria : {delay : {first : 8000, last : 15000},type : 'Cast'},cost : {hp : 0, mana : 5, stamina : 0}}
}
 
var onData = checkOnData();
var gaugeStock = creatGaugeStock(onData);
var gaugeAddValueStock = creatGaugeAddValue(onData)
 
setInterval('checkGauge()',10);
function checkOnData(){ //battleCharacter에 올라온 데이터 확인
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
 
function creatGaugeStock(data){ //onData에 비례한 게이지 스톡 생성
	var gaugeStock = [];
 
	for(var i = 0; i < data.length; i++){
 
		if(!gaugeStock[i]){
			gaugeStock[i] = [];
		}
		if(data[i]){
			for( var j = 0; j<data[i].length; j++){
				gaugeStock[i][j] = 0;
				if(!document.getElementById('Ally'+data[i][j].ally)){
				var creatAlly =  document.getElementById('FieldBattle');
				var div = document.createElement('div')
				div.id = 'Ally'+data[i][j].ally;
				creatAlly.appendChild(div)
				}
				var stock = document.getElementById('Ally'+data[i][j].ally); // 테스트용 게이지 UI 생성
				var table = document.createElement('table');
				var tr1 = document.createElement('tr');
				var tr2 = document.createElement('tr');
				var th = document.createElement('th');
				var td = document.createElement('td');
				td.className = 'gauge';
				th.id = 'name'+i+j;
				th.innerText = data[i][j].onName;
				td.id = data[i][j].onName+i+j;
				th.style.width = '10%';
				tr1.appendChild(th);
				tr2.appendChild(td);
				td.style.width = td.parentNode.offsetWidth*Math.floor(gaugeStock[i][j]/10000*90)/100+'px';
				table.appendChild(tr1)
				table.appendChild(tr2)
				stock.appendChild(table);
			}
		}
	}
	return gaugeStock;
}
 
function creatGaugeAddValue(data){ //onData에 비례한 게이지 증가량 생성
	var guageAddValueStock = [];
	for(var i = 0; i < data.length; i++){
 
		if(!guageAddValueStock[i]){
			guageAddValueStock[i] = [];
		}
		if(data[i]){
			for( var j = 0; j<data[i].length; j++){
				guageAddValueStock[i][j] = calculateGuageFillValue(data[i][j].stats.spd);
			}
		}
	}
	return guageAddValueStock;
}
 
function calculateGuageFillValue(speed){ // 게이지 증가량 계산 (공식 개선 필요)
	var fillValue = 0;
	fillValue = speed * 10;
	if(fillValue <= 0){
	fillValue = 1;
	}
	return fillValue;
}
 
function checkGauge(){ //게이지 수치를 판정
	let stock = gaugeStock,
	    fillValue = gaugeAddValueStock,
	    data = onData;
	for( var i = 1; i < data.length; ){
		for( var j = 0; j < data[i].length; j++){
				var changeUi = document.getElementById(data[i][j].onName+i+j)
			if(data[i][j].now.hp > 0){
				stock[i][j] += fillValue[i][j];
				changeUi.style.width = Math.floor(stock[i][j]/10000*900)/10+'%'; 
				changeUi.innerText = Math.floor(stock[i][j]/10000*1000)/10+'%'
				//UI 반영(게이지 증가) 게이지가 -이하로 떨어졌을때 반영방안 필요
				if(stock[i][j] >= 10000){
					stock[i][j] = 10000
					if( i == 1 ){ // 플레이어의 선택
						if( !data[i][j].aria.skill ){
							document.getElementById('player'+j).disabled = false; // 코스트가 부족한 스킬의 버튼은 비활성화시킬 방안 필요
						}
						else if( data[i][j].aria.skill){
							actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
						}
					}
					else{//적의 자동행동
						if( !data[i][j].aria.skill ){
							var skill = selectSkill(data[i][j]);
							stock[i][j] =  checkSkill(data[i][j], stock[i][j], skill); //변경 필요사항 코스트가 부족여부 상관없이 자동으로 사용됨
 				changeUi.innerText = Math.floor(stock[i][j]/10000*1000)/10+'%'
				changeUi.style.width = Math.floor(stock[i][j]/10000*900)/10+'%'; 
				if(data[i][j].aria.type){
				document.getElementById('name'+i+j).innerText = data[i][j].onName+'('+data[i][j].aria.type+')';
				}
							if(stock[i][j] >= 10000){
				console.log(data[i][j].onName + "은(는)" + data[i][j].aria.skill.name + "을(를) 사용했다.")
								stock[i][j] = actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
 				changeUi.innerText = Math.floor(stock[i][j]/10000*1000)/10+'%'
				changeUi.style.width = Math.floor(stock[i][j]/10000*900)/10+'%'; 
 
							}
						}
						else if( data[i][j].aria.skill){
				console.log(data[i][j].onName + "은(는)" + data[i][j].aria.skill.name + "을(를) 사용했다.")
							stock[i][j] = actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
				document.getElementById('name'+i+j).innerText = data[i][j].onName
				changeUi.innerText = Math.floor(stock[i][j]/10000*1000)/10+'%'
				changeUi.style.width = Math.floor(stock[i][j]/10000*900)/10+'%'; 
						}
					}
				}
			}
 
 
			else{//Hp가 0 이하로 떨어졌을때의 게이지 판정
				stock[i][j] = 0 ;
				changeUi.style.width = Math.floor(stock[i][j]/10000*900)/10+'%'; 
				changeUi.innerText = 'Death'
			}
		}
		if(i == 0 ){ // 플레이어에게 우선권을 부여하기 위한 if else
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
 
function selectSkill(performer){ //입력된 패턴에 따른 자동 행동
	if( performer.alliy != 1){
		var skill = checkParttern(performer,performer.pattern);
		return skill;
	}
	else if( performer.alliy == 1){
		//버튼 입력
	}
}
 
function checkParttern(performer,pattern){ // 패턴 확인
	
	function rulePattern(performer,pattern){ // 패턴 정보 확인후 판정 개선 필요
 
	switch(pattern[0]){
	case "OT00000" : 
	return pattern[2];
	break;
	case "NS00101" :
	if(performer.now.stamina >= pattern[1]){
	return pattern[2];
	}
	else{
	return 0 ;
	}
	case "NM00101" : 
	if(performer.now.mana >= pattern[1]){
	return pattern[2];
	}
	else{
	return 0 ;
	}
	break;
	}
	} 
	for(var i = 0; i<pattern.length; i++){
	var check = rulePattern(performer,pattern[i])
	if( check != 0 ){
	return skillData[check];
	}
	}
 
}
 
 
function checkSkill(performer, gaugeStock, skill){ //스킬 소모,게이지 감소량 체크
 
 
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
				failReason[1].hp = 'fail'
			}
			else if(cost.mana > giveCost.mana){
				failReason[1].mana = 'fail'
			}
			else if(cost.stamina > giveCost.stamina){
				failReason[1].stamina = 'fail'
			}
			return failReason;//실패이유 반환
		}
	}
 
	function checkSkillAria(performer, stock, skill){ // 선 딜레이 반영, 영창 종류(차지 캐스팅) 구분
 
			performer.aria.skill = skill;
		if(skill.delay){
			performer.aria.type = skill.delayType;
			stock -= skill.delay.first;
			//UI 반영(게이지 감소)
 
		}
			return stock;
	}
	var cost = checkSkillCost(performer, skill); // 코스트 체크
	if( cost[0] == 1 ){
		performer.now = cost[1];
	}
	else{ // cost[0]==0일때 (실패시)
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
		var failMessage = performer.onName+ '은(는)' + failType + '이(가) 부족합니다.'
		console.log(failMessage); //필요사항 스킬이 발동되지 않게 하는것
	}
 
 
	if(cost[0] == 1){

			gaugeStock = checkSkillAria(performer, gaugeStock, skill);
	}
	else{
	gaugeStock = 0;
	}
	return gaugeStock;
 
}
 
function actionSkill(performer, skill, data, stock){ // 스킬 작동
 
 
	function checkSkillTargeting(performer, skill, data){ // 스킬의 타겟을 선택하는 것, 스킬 별 타겟 판정은 아래의 주석과 같음
	//skill.target = [ (0 = self, 1 = friend , 2 = enemy, 3 = all) , ( 0 = individual , 1= multi , 2 = all) ]
			var targetData = [];
		if( skill.target[0] == 0 ){
			targetData = [[performer]]
			return targetData;
		}
		else if( skill.target[0] == 1){
			if( performer.ally != 0){//소속이 있는 경우 자신을 포함한 같은 소속원을 넣음
			targetData = [data[performer.alliy]]
				return targetData ;
			}
			else{//소속이 없는 경우 자신만 넣음
				targetData = [[performer]]
				return targetData;
			}
		}
		else if( skill.target[0] == 2){

			for( var i = 0; i < data.length; i++){
						targetData.push([]);
						for( var j = 0; j < data[i].length; j++){
							if( performer.onName != data[i][j].onName ){//무소속인 자기 자신을 제외
								targetData[i].push(data[i][j]);
							}
						}
					}
					// 무소속일때 판정
				

			
			return targetData;
		}
		else if( skill.target[0] == 3){

			for( var i = 0; i < data.length; i++){
					targetData.push(data[i]);
			}
			return targetData;
		}
	}
	
	function checkRange(performer, skill, target){ // 사정거리 계산
		var rangeIn = [];
		var range = skill.range * performer.range; 
		var rangeCalculate = 0;
		for( var i = 0 ; i < target.length; i++){
		if(!rangeIn[i]){
			rangeIn[i] = [];
		}
			for( var j = 0; j < target[i].length; j++){ // root((사용자 x - 대상x )^2+(사용자 y - 대상 y)^2)
				rangeCalculate = Math.sqrt(Math.pow(performer.coordinates.x - target[i][j].coordinates.x,2)+Math.pow(performer.coordinates.y - target[i][j].coordinates.y,2));
				//1이하시 사거리 내로 판정
					rangeIn[i][j] = rangeCalculate / range;
				
			}
		}
		return rangeIn;
	}
	function selectTarget(skill,target){ //타겟 설정
		let allyDice = 0,
		    targetDice = 0,
		    activeCheck = 0;
		while(target.length > 0){


		
		 allyDice = Math.floor(Math.random()*target.length); // 타겟이 되는 동맹 구분
		 targetDice = Math.floor(Math.random()*target[allyDice].length); // 해당 동맹에 속한 대상
		if(target[allyDice].length == 0){
		target.splice(allyDice,1);
		}

		else if(target[allyDice][targetDice].now.hp <= 0){
		target[allyDice].splice(targetDice,1);
		
		}
		
		else if(target[allyDice][targetDice].now.hp > 0){
			return [target[allyDice][targetDice],[allyDice,targetDice]];
		}
		} // 빈 대상이거나 죽은 경우 다시 굴림

	}
	function checkHit(performer,skill,target){
		let hitRate = performer.rate.hit, //명중률(현재는 단순 공식 추가 필요)
		    dodgeRate = target.rate.dodge; // 회피율(현재는 ~ 이하 동일)
	
		if(Math.random()*100 <= hitRate){
			if(Math.random()*100 <= dodgeRate){
				return 0;
			}
			return 1;
		}
		return 0;
	}
	function calculateSkillDamage(performer,skill){ // 속성 및 위력체크 ( 속성 미구현)
		//[performer의 공격속성값을 따로 판정할 것인가? skill의 속성값만 판정할 것인가?]
		const power = skill.power;
		let damage = 0;
		for(let i = 0; i<power.length; i++){
		powerSubject = performer.baseOption[power[i][0]]
		powerValue = power[i][1]
		if(i >= 1){
		}
		else{
		damage += powerSubject*powerValue / 100;
		}
		}
		return [damage,skill.defence];
	}
	function calculateDefenseDamage(target,damage){ // 속성 및 방어력 체크 ( 속성 미구현)
		//target.element의 방어 값은 어떤식으로 할 것 인가? 
		//무효 흡수 내성 개념인가 상성 개념인가?
		// 0    1     2~ ?
		if(damage[1] == 0){
		return damage[0]
		}
		else{
		let damageCalculate = 0;
			if(damage[1] == 1){
				damageCalculate = damage[0]*(100-target.baseOption.defensePhysicalPercent)/100-target.baseOption.defensePhysicalNumber;
				if(damageCalculate < damage[0] * 0.1){
					damageCalculate = damage[0] * 0.1;
				}
			}
			else if(damage[1] == 2){
				damageCalculate = damage[0]*(100-target.baseOption.defenseMagicPercent)/100-target.baseOption.defenseMagicNumber;
				if(damageCalculate < damage[0] * 0.1){
					damageCalculate = damage[0] * 0.1;
				}
			}
		return damageCalculate
		}
	}
	function checkSkillDelay(performer, stock, skill){ // 스킬 사용후 딜레이 반영
 			stock -= 10000
			if(skill.delay){
			stock -= skill.delay.last;
			}
			//UI 반영(게이지 감소)
			return stock;
		
	}
	var target = checkSkillTargeting(performer, skill, data);
	var range = checkRange(performer, skill, target);
	
	if( skill.target[1] == 2){
		for( var h = 0; h < skill.hitCount; h++){
			for( var i = 0; i < target.length; i++){
				for( var j = 0; j < target[i].length;j++){
					if(target[i][j]>0){
						var hit = 0;
						if( range[i][j] <= 1 ){
							hit = checkHit(performer,skill,target[i][j])
						}
						else{
							hit = 0;
							console.log(target[i][j].onName+'는 사거리 바깥이다.');
						} 
						if( hit >= 1 ){
							damage = calculateSkillDamage(performer,skill);
							var criticalDice = Math.random() * 100;
							if( criticalDice <= performer.critical){
								damage *= 2;
							}
							if(skill.skillType == 'combat'){
								damage = Math.round(calculateDefenseDamage(target[i][j],damage));
								target[i][j].now.hp -= damage;
							}
							else if(skill.skillType == 'support'){ 
	// 스킬 구분 combat - (melee,range)(physical,magic),support-(heal,barrier...등)(bless,curse..등)으로 구분 하여 스킬 효과를 판정
								target[i][j].now.hp += damage;
							}


						}
					}
				}
			}
		}
	}
	else if( skill.target[0] != 0 ){
		for( var h = 0; h < skill.hitCount; h++){
			var hitTarget = selectTarget(skill,target);
			if(hitTarget){
			var hit = 0;
			if( range[hitTarget[1][0]][hitTarget[1][1]] <= 1 ){ // 거리판정
				hit = checkHit(performer,skill,hitTarget[0])
			}
			else{
				hit = 0;
				console.log(hitTarget[0].onName + '은 사거리 바깥이다.');
			} 
			if( hit >= 1 ){
				damage = calculateSkillDamage(performer,skill);
				var criticalDice = Math.random() * 100;
				if( criticalDice <= performer.critical){
					damage *= 2;
				}
				if(skill.skillType == 'combat'){
					damage = Math.round(calculateDefenseDamage(hitTarget[0],damage));
					console.log( hitTarget[0].onName +'은(는)'+damage+'의 피해를 입었다. ('+ hitTarget[0].now.hp+ '>>' + ( hitTarget[0].now.hp - damage ) + ')');
					hitTarget[0].now.hp -= damage;
				}
				else if(skill.skillType == 'support'){ 
					hitTarget[0].now.hp += damage;
				}
			}
			}
		}
	}
	else if( skill.target[0] == 0){
		for( var h = 0; h < skill.hitCount; h++){
			damage = calculateSkillDamage(performer,skill);
			var criticalDice = Math.random() * 100;
			if( criticalDice <= performer.rate.critical){
				damage *= 2;
			}
			if(skill.damageType != 0){
				damage = calculateSkillDamage(performer,skill);
				var criticalDice = Math.random() * 100;
				if( criticalDice <= performer.critical){
					damage *= 2;
				}
				if(skill.skillType == 'combat'){
					damage = Math.round(calculateDefenseDamage(hitTarget[0][0],damage));
					hitTarget[0][0].now.hp -= damage;
				}
				else if(skill.skillType == 'support'){ 
					hitTarget[0][0].now.hp += damage;
				}
			}
		}
	}
	performer.aria.skill = 0;
	stock = checkSkillDelay(performer, stock, skill);
	return stock;
	
}
