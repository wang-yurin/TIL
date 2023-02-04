### 리액트의 리랜더링 알아보기 2

리액트 엘리먼트는 불변객체(immutable)이다.  
불변객체란? 변하지 않는 객체  
우리는 그저 React.DOM.render(element, rootElement)로 전달할 뿐, 변경 판단 및 반영은 리액트가 알아서한다.

[재조정(Reconciliation)](https://ko.reactjs.org/docs/reconciliation.html#gatsby-focus-wrapper)

- 엘리먼트 타입이 바뀌면? 이전 엘리먼트는 버리고 새로 그린다.
- 엘리먼트 타입이 같다면? (key를 먼저 비교하고) props를 비교해서 변경사항을 반영한다.
