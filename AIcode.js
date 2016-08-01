
// 몬스터 클래스
var monster = function monster(){
};

monster.prototype = {
    name: String,
    atk: Number,
    hp: Number,
    type: Number
  
};

    // 싸울 몬스터 종류(생성)
    var new_monster1 = new monster();
  
    new_monster1.name = "불꽃몬";
    new_monster1.atk = 1000;
    new_monster1.hp = 1000;
    // 속성
    new_monster1.type = 1;
    // 몬스터 고유번호
    new_monster1.monnumber = 1;
    
    
    var new_monster2 = new monster();
  
    new_monster2.name = "나무몬";
    new_monster2.atk = 1100;
    new_monster2.hp = 900;
    new_monster2.type = 2;
    new_monster2.monnumber = 2;
    
    var new_monster3 = new monster();
  
    new_monster3.name = "물몬";
    new_monster3.atk = 900;
    new_monster3.hp = 1100;
    new_monster3.type = 3;
    new_monster3.monnumber = 3;


// AI 패턴 캡슐화로 진행
function AI(t,mh,rh,atk){
    
    var type = t;
    var myhp = mh;
    
    // 몬스터 타입 확인
    this.checktype = function(t,mh,rh,atk){
        var upatk = 0; 
        var hpresult = 0; 
        if(t == 1){
            console.log("불 type 패턴 시작");
            hpresult = mh/rh * 100;
            if(20 == hpresult){
                console.log("속성 공격 치명타");
                upatk= atk * 150 / 100;
                // 적용
                rh -= upatk;
                
            }else if(10 == hpresult){
                console.log("속성 더블 공격");
                upatk = atk * 200 / 100;
                rh -= upatk;
                
            }else{
                console.log("일반 공격");
                rh -= atk;
            }
        
        }else if(t == 2){
            console.log("풀 type 패턴 시작");
            
             hpresult = mh/rh * 100;
             
            if(20 == hpresult){
                console.log("속성 공격 치명타");
                upatk = atk * 150 / 100;
                // 적용
                rh -= upatk;
                
            }else if(10 == hpresult){
                console.log("속성 더블 공격");
                upatk= atk * 200 / 100;
                rh -= upatk;
                
            }else{
                console.log("일반 공격");
                rh -= atk;
            }
            
        }else{
            
            hpresult = mh/rh * 100;
            if(20 == hpresult){
                console.log("속성 공격 치명타");
                upatk = atk * 150 / 100;
                // 적용
                rh -= upatk;
                
            }else if(10 == hpresult){
                console.log("속성 더블 공격");
                upatk = atk * 200 / 100;
                rh -= upatk;
                
            }else{
                console.log("일반 공격");
                rh -= atk;
            }
        }
    };
} // AI

// 몬스터의 공격 파악후 싸우는 턴 ++ 상승
function fight(){
    
    // 싸우는 턴
    var turn = 0;

    // random으로 걸린 몬스터의 이름을 변수에 숫자를 넣어준다
    // 본인
    var my_type = 1; // 임시적 숫자 대입
    var my_hp = new_monster1.hp;
    var my_name = new_monster1.name;
    var my_hp_result = new_monster1.hp;
    // 상대
    var enemy_mon = 2; // 임시적 숫자 대입
    var enemy_hp = new_monster2.hp;
    var enemy_mon_name = new_monster2.name;
    var enemy_hp_result = new_monster2.hp;
    var enemy_atk = new_monster2.atk;
    var enemy_type = new_monster2.type;
    // 싸움 결과
    var result = 0;
    // 데미지 계산 결과
    var damage = 0;
    // UI 상에 띄워줄 HTML 코드 
    var output;
    
    // 자신의 턴 확인
    if (turn % 2 === 0 ){
        console.log(new_monster1 +"의 턴!");
        console.log(new_monster1 +"의 공격!");
        damage = (new_monster2.hp - new_monster1.atk);
        console.log(enemy_mon_name +"은"+ enemy_atk + "의 데미지를 받았다");
        // 적 hp 종합 저장
        enemy_hp_result -= damage;
        
        // 화면상 체력 출력 코드 (결합 예정)
        
        // 끝난후 turn 상승
        turn ++ ;
        
        
        
    }else{
        console.log(new_monster2.name + "의 턴!");
        console.log(new_monster1 +"의 공격!");
        // AI 공격
        var AI_active = new AI(my_type, enemy_hp, enemy_hp_result, enemy_atk);
        // AI 공격 결과 
        damage = AI_active;
        // 결과 보고
        console.log(my_name +"은"+ damage + "의 데미지를 받았다");
        // 적 hp 종합 저장
        my_hp_result -= damage;
        
        
        turn ++ ;
        
    }
    
    
} // fight



