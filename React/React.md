# React

## 리액트 프로젝트 생성하기

```md
npx create-react-app 프로젝트명

npm start
```

```
src
├─ App.js
├─ index.css
└─ index.js  --> 가장 먼저 실행되는 파일
```

### index.js 파일 파헤쳐보기

`import React from "react";`  
`import ReactDOM from "react-dom/client";`  
react-dom/client에서 ReactDom을 가져오고있다.  
즉, react-dom이라는 제 3의 라이브러리로부터 ReactDOM 객체를 가져오는 것(package.json 파일 dependencies에서 react, react-dom을 확인 할 수있다.)  
이 두개는 개별 패키지로 각기 다른 역할을 하지만 React 라이브러리라고도 볼 수 있으며 React 라이브러리로부터 같은 의존성을 갖는다.  
이를 통해 index.js 파일에서 해당 라이브러리가 제공하는 기능을 사용할 수 있다.
<br>
<br>

`createRoot` 메서드의 역할?  
React로 구축할 사용자 인터페이스인 React 애플리케이션을 불러온 웹 페이지 상에서 어디에 배치해야하는지 React에 알려준다.  
이 메서드를 통해 public 폴더에 있는 index.html 파일로 이동하는데 이 파일은 싱글 HTML 파일로 브라우저가 불러오는 파일이다.  
React 애플리케이션 전체에서 사용하는 유일한 HTML 파일(싱글 페이지 애플리케이션)

```js
// index.js 파일
const root = ReactDOM.createRoot(document.getElementById("root")); // ---> id가 root를 가진 이 코드가 아래의 div 태그를 의미한다.
root.render(<App />); // render 메서드를 통해 이 div 태그를 통해 뭘 랜더링 해야하는지 알려준다.

// index.html파일
<div id="root"></div>; // ---> 사용자 인터페이스가 렌더링 되어야 하는 부분
```

<br>

## JSX

<a href="https://ko.reactjs.org/docs/introducing-jsx.html">JSX React 공식문서</a>  
자바스크립트를 확장한 문법

<br>

### 리액트로 작성된 컴포넌트는 어떤 것일까?

단지 (HTML 코드를 리턴하는)자바스크립트 함수일 뿐이다.  
HTML 코드를 리턴하는 함수인 컴포넌트를 생성해서 내보내면(export) 되고, 사용하고싶은 파일에서 받아오면(import)되는데 JSX 코드에서 대문자로 시작하는 HTML 요소처럼 사용하면 된다.

<br>

### JSX 코드 안에서의 중요한 규칙

반환하는 문장마다 또는 JSX코드 조각마다 반드시 한 개의 루트 요소를 가져야한다. (여러개의 루트 요소를 가질 수 없고 하나의 루트 요소 안에서만 여러개의 요소들이 올 수 있다.)

```js
// 잘못된 방법
function Wrong() {
  return <div>Hello</div>
  <div><h1>My name is...</h1></div>
}

// 옳은 방법
function Correct() {
  return (
    <div>
      <div>Hello</div>
      <div>
        <h1>My name is...</h1>
      </div>
    </div>
  )
}
```

<br>

## props?

props는 속성을 나타내는 데이터이다.  
함수 컴포넌트에서 한 개의 매개변수만을 사용하는데 그 한 개의 매개변수는 프로퍼티로서 모든 속성을 받는 객체가 된다.
