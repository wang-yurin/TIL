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

<br>

## 이벤트 핸들러 주의사항

```js
function Example() {
  const clickHandler = () => {
    console.log("clicked!");
  };
  return (
    <Component>
      <button onClick={clickHandler}>Change Button</button>
    </Component>
  );
}
```

위의 코드 `<button onClick={clickHandler}>Change Button</button>`에서 `clickHandler`를 지정했지만 실행하지 않았다.(괄호를 추가하지 않았다.)
`clickHandler` 함수를 지정했지만 실행을 하지 않았는데 만약, 실행을 했다면?

`<button onClick={clickHandler()}>Change Button</button>` 이 코드라인이 평가 되었을 때 자바스크립트는 이 코드라인을 실행했을 것이다. 그리고 JSX 코드가 반환될 때 아래 코드라인이 평가되는데

```js
<Component>
  <button onClick={clickHandler}>Change Button</button>
</Component>
```

그렇기에 클릭했을 때 `clickHandler`가 실행되는 것이 아니라 JSX 코드가 평가 될 때 실행되어서 클릭 전에 실행이 미리 되어버린다.
따라서 onClick을 위한 값으로 지정만 해놓고(실행은 하지 않기) 리액트는 이것을 기억했다가 클릭할 때마다 함수를 실행한다.

---

<br>

# 🧐 Quiz

```
Q. React.js에서는 어떤 유형의 코드로 작성하나요?
A. 선언형(Declarative) JavaScript 코드

React.js를 사용할 때는 목표, 즉 화면에 무엇이 표시되어야 하는지를 정의하고 React가 거기까지 도달하는 방법을 알아내도록 만들어야 합니다.
```

```
Q. “JSX”란 무엇일까요?
A. React 프로젝트에서만 활성화되는 특수한 비표준 구문이다.

“create-react-app”으로 생성한 React 프로젝트와 같이 React 프로젝트는 JSX 구문을 지원합니다.
백그라운드에서 표준 JS 코드로 컴파일됩니다.
```

```
Q. 왜 “컴포넌트”를 React의 모든 것이라고 할까요?
A. 모든 UI는 결국 여러 컴포넌트로 구성되며, 따라서 사용자 인터페이스를 "컴포넌트의 조합"이라고 생각할 수 있다.

“컴포넌트”는 사용자 인터페이스에 관한 사고 방식일 뿐입니다. React는 이러한 개념을 아우르며 컴포넌트를 구축할 수 있는 도구를 제공합니다.
```

```
Q. “선언형”은 무슨 뜻인가요?
A. 원하는 결과(대상 UI 등)를 정의하고 라이브러리(React)가 단계를 구성한다.

대상의 “상태(UI)”를 정의하면 해당 결과를 얻기 위해 어떤 JS 명령어를 실행해야 하는지를 React가 특정합니다.
```

```
Q. “React 컴포넌트”란 무엇일까요?
A. 일반적으로 해당 컴포넌트가 사용될 때 화면에 표시되는 HTML(정확히는 JSX) 코드를 반환하는 JS 함수이다.
```

```
Q. React 앱은 커스텀 React 컴포넌트를 몇 개 가져야 하나요?
A. 사용자 마음대로

원하거나 필요한 만큼 리액트 컴포넌트를 가질 수 있습니다.
```

```
Q. 올바른 문장은 무엇인가요?
A. React를 사용해서 DOM 노드에 마운트되는 하나의 루트 컴포넌트를 가진 컴포넌트 트리를 구축한다.
```

```
Q. “컴포넌트 트리”란 무엇을 뜻하나요?
A. 루트노드 아래에 여러 컴포넌트가 중첩되어 있는 것을 뜻한다.

표준 HTML 문서를 구축할 때 HTML 트리를 구축하는 것처럼 컴포넌트를 서로 중첩해 트리를 구축합니다.
```

```
Q. 어떻게 컴포넌트 간에 데이터를 전달하나요?
A. "프로퍼티"라고 잘 알려진 "커스텀 HTML 속성을 통해

고유한 “HTML 요소”를 구축하므로 고유한 속성(React에서는 “프로퍼티”라고 함)을 정의할 수 있습니다.
```

```
Q. React 컴포넌트 내부의 동적 데이터(반환된 JSX 코드)는 어떻게 출력하나요?
A. 아무 JS 표현식을 단일 중괄호{}로 감싸 사용한다.

중괄호 사이에 블록 문(예: if 문)을 넣을 수는 없지만, 이 특수 기능을 사용하면 모든 JS 표현식의 결과를 출력할 수 있습니다.
```
