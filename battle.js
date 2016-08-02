<!DOCTYPE html>
<style>
.gauge
{
	padding : 10px;
	margin : 10px 0;
	background-color : #005500;
}

</style>
<body id="GaugeStock">
<div>

</div>
<script>
var battleCharacter = [
{ onName : 'Test ally00', range : 1, hit : 100, dodge : 50, coordinates : { x : 0, y : 0 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 20 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1, aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally01', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 10 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 3, range : 2, target : [2,2], powerValue : 2,  aria : {delay : {first : 5000, last : -5000},kind : 0},cost : {hp : 0, mana : 5, stamina : 0}}},
{ onName : 'Test ally02', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 19 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally03', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 18 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally04', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 17 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally05', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 16 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally06', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 13 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 2, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 1000, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 10}}},
{ onName : 'Test ally07', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 12 , ally : 0 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally20', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 11 , ally : 2 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally21', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 9 , ally : 2 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally22', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 8 , ally : 2 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally23', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 7 , ally : 2 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 0, last : 0},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}},
{ onName : 'Test ally24', range : 1, hit : 100, dodge : 50, coordinates :{ x : 1, y : 1 },critical : 10, attack : 2, defense : 0, now : {hp : 100, mana : 100, stamina : 100} , speed : 6 , ally : 2 ,aria : {kind : 0, type : 0,skill : 0},skill : { damageType : 1, hitNumber : 1, range : 2, target : [2,0], powerValue : 1,  aria : {delay : {first : 100, last : 9900},kind : 0},cost : {hp : 0, mana : 0, stamina : 5}}}
 
 
];
 
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
				var stock = document.getElementById('GaugeStock'); // 테스트용 게이지 UI 생성
				var draw = document.createElement('div');
				draw.className = 'gauge';
				draw.innerText = data[i][j].onName;
				draw.id = data[i][j].onName+i+j;
				draw.style.width = 10+gaugeStock[i][j]/10000*90+'%';
				stock.appendChild(draw);
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
				guageAddValueStock[i][j] = calculateGuageFillValue(data[i][j].speed);
			}
		}
	}
	return guageAddValueStock;
}
 
function calculateGuageFillValue(speed){ // 게이지 증가량 계산 (공식 개선 필요)
	var fillValue = 0;
	fillValue = speed * 1;
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
			if(data[i][j].now.hp > 0){
				stock[i][j] += fillValue[i][j];
				document.getElementById(data[i][j].onName+i+j).style.width = 10+stock[i][j]/10000*90+'%'; 
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

								document.getElementById(data[i][j].onName+i+j).style.width = 10+stock[i][j]/10000*90+'%'; 
							if(stock[i][j] >= 10000){
								stock[i][j] = actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);

								document.getElementById(data[i][j].onName+i+j).style.width = 10+stock[i][j]/10000*90+'%'; 
							}
						}
						else if( data[i][j].aria.skill){
							stock[i][j] = actionSkill(data[i][j], data[i][j].aria.skill, data, stock[i][j]);
							document.getElementById(data[i][j].onName+i+j).style.width = 10+stock[i][j]/10000*90+'%'; 
						}
					}
				}
			}
 
 
			else{//Hp가 0 이하로 떨어졌을때의 게이지 판정
				stock[i][j] = 0 ;
				document.getElementById(data[i][j].onName+i+j).style.width = 10+stock[i][j]/10000*90+'%'; 
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
		var skill = performer.skill//checkPattern(performer.pattern);
		return skill;
	}
	else if( performer.alliy == 1){
		//버튼 입력
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
		if(skill.aria.delay.first != 0){
			performer.aria.kind = skill.aria.kind;
			stock -= skill.aria.delay.first;
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
 
 
	
	gaugeStock = checkSkillAria(performer, gaugeStock, skill);
	return gaugeStock;
 
}
 
function actionSkill(performer, skill, data, stock){ // 스킬 작동
 
 
	function checkSkillTargeting(performer, skill, data){ // 스킬의 타겟을 선택하는 것, 스킬 별 타겟 판정은 아래의 주석과 같음
	//skill.target = [ (0 = self, 1 = friend , 2 = enemy, 3 = all) , ( 0 = individual , 1= multi , 2 = all) ]
		if( skill.target[0] == 0 ){
			return [[performer]];
		}
		else if( skill.target[0] == 1){
			if( performer.ally != 0){//소속이 있는 경우 자신을 포함한 같은 소속원을 넣음
				return [data[performer.alliy]];
			}
			else{//소속이 엇는 경우 자신만 넣음
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
				if( rangeCalculate <= range ){//1이하시 사거리 내로 판정
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
	function checkHit(performer,skill,target){
		let hitRate = performer.hit, //명중률(현재는 단순 공식 추가 필요)
		    dodgeRate = target.dodge; // 회피율(현재는 ~ 이하 동일)
	
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
		return performer.attack * skill.powerValue;
	}
	function calculateDefenseDamage(target,damage){ // 속성 및 방어력 체크 ( 속성 미구현)
		//target.element의 방어 값은 어떤식으로 할 것 인가? 
		//무효 흡수 내성 개념인가 상성 개념인가?
		// 0    1     2~ ?
		return damage-target.defense;
	}
	function checkSkillDelay(performer, stock, skill){ // 스킬 사용후 딜레이 반영
 
			stock = skill.aria.delay.last;
			//UI 반영(게이지 감소)
			return stock;
		
	}
	var target = checkSkillTargeting(performer, skill, data);
	var range = checkRange(performer, skill, target);
	
	if( skill.target[1] == 2){
		for( var h = 0; h < skill.hitNumber; h++){
			for( var i = 0; i < target.length; i++){
				for( var j = 0; j < target[i].length;j++){
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
						if(skill.damageType == 0){ // 피해 종류 구분 용, 개선 필요함.
	// 스킬 구분 combat - (melee,range)(physical,magic),support-(heal,barrier...등)(bless,curse..등)으로 구분 하여 스킬 효과를 판정
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
				hit = checkHit(performer,skill,hitTarget[0])
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
	performer.aria.skill = 0;
	stock = checkSkillDelay(performer, stock, skill);
	return stock;
	
}
</script>
</body>
</html>
