# bctpgame

## 코딩 스타일 가이드

1. 변수 선언  
  1. var 대신 let 과 const를 사용한다.
  1. 변수는 let과 const를 기본으로 하되 다음과 같은 예외를 둔다.
    * 원시형 변수(Primitive Type ex. string, number, boolean)의 경우에는 let을 사용한다.
    * 참조형 변수(Complex Type ex.array, object, function)의 경우에는 const를 사용한다.
    * 상수의 경우에는 타입에 상관 없이 모두 const를 사용한다.
  1. const는 const끼리 let은 let끼리 그룹화 한다.
  ```javascript
  //bad
  let a = 1;
  const b = 2;
  let c = 3;
  const d = 4;
  //good
  let a = 1;
  let c = 3;
  const b = 2;
  const d = 4;
  ```
  1. 변수 선언은 해당 변수의 스코프 시작 부분에 한번의 선언문만 이용하여 선언한다.
  ```javascript
  //bad
  let variable1 = value1;
  let variable2 = value2;
  let variable3 = value3;
  //good
  let variable1 = value1,
      variable2 = value2,
      variable3 = value3;
  ```
