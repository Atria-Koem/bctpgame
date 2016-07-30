
// 몬스터 클래스
var monster = function monster(){
};

monster.prototype = {
    name: String,
    atk: Number,
    hp: Number,
    type: Number
  
}

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
function AI(t,m){
    
    var type = t;
    var myhp = m;
    
    
    // 몬스터 타입 확인
    this.checktype = function(t){
        if(t == 1){
            console.log("불 type 패턴 시작");    
            
        }else if(t == 2){
            console.log("풀 type 패턴 시작");
        }else{
            console.log("물 type 패턴 시작");
        }
        
    }
    
    this.game = a ;

}; // AI

// 몬스터의 공격 파악후 싸우는 턴 ++ 상승
function fight(){
    
    // 싸우는 턴
    var turn = 0;

    // random으로 걸린 몬스터의 이름을 변수에 숫자를 넣어준다
    // 본인
    var mymon;
    var myhp = new_monster(mymon).hp;
    var mytype;
    // 상대
    var monname;
    var enemyhp = new_monster(monname).hp;
    // 싸움 결과
    var result = 0;
    // 데미지 계산 결과
    var damage = 0;
    // UI 상에 띄워줄 HTML 코드 
    var output
    
    // 자신의 턴 확인
    if (turn % 2 == 0 ){
        document.write(new_monster(mymon) +"의 턴!");
        document.write(new_monster(mymon) +"의 공격!");
        damage = (new_monster(monname).hp - new_monster(mymon).atk);
        document.write(new_monster(monname) +"은"+ damage + "의 데미지를 받았다");
        // 적 hp 종합 저장
        enemyhp -= damage;
        
        // 화면상 체력 출력 코드 (결합 예정)
        div.innerHTML = output;
        
        // 끝난후 turn 상승
        turn ++ ;
        
        
        
    }else{
        
        document.write(new_monster(monname).name + "의 턴!");
        
        document.write(new_monster(mymon) +"의 공격!");
        // AI 공격
        var AI_active = new AI(mytype, enemyhp);
        // AI 공격 결과 
        damage = AI_active;
        // 결과 보고
        document.write(new_monster(mymon) +"은"+ damage + "의 데미지를 받았다");
        // 적 hp 종합 저장
        myhp -= damage;
        
        div.innerHTML = output;
        
        turn ++ ;
        
    }
    
    
} // fight



