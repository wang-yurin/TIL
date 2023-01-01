// 함수형 컴포넌트
// function App() {
//   const name = '왕';
//   return <div>나는 {name} </div>;
// }

// export default App;

// 클래스형 컴포넌트
import { Component } from 'react';

class App extends Component {
  render() {
    const name = '왕';
    return <div>나는 {name}</div>;
  }
}

export default App;
