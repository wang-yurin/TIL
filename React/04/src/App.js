// 함수형 컴포넌트
// function App() {
//   const name = '왕';
//   return <div>나는 {name} </div>;
// }

// export default App;

// 클래스형 컴포넌트
// import { Component } from 'react';

// class App extends Component {
//   render() {
//     const name = '왕';
//     return <div>나는 {name}</div>;
//   }
// }

// export default App;

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  // return <MyComponent name="유린" />;
  // return <MyComponent />;
  // return <MyComponent>칠드런</MyComponent>;
  // return <MyComponent name={2}>칠드런</MyComponent>; // 값은 잘 나오지만 콘솔에 에러 (name의 타입을 string으로 지정해 놓아서)
  return (
    <MyComponent name="유린" favoriteNumber={2}>
      칠드런
    </MyComponent>
  );
};

export default App;
