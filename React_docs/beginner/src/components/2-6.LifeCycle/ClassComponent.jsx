import React, { Component } from 'react';

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { date: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 10000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    // console.log('tick');
    this.setState({ date: new Date() });
  }

  // 이렇게 쓰면 constructor에 this 바인딩 해주어야함
  // handleClick() {
  //   alert(this.state.date);
  // }

  // 화살표 함수를 사용하면 this 바인딩을 해주지 않아도 됨
  handleClick = () => {
    alert(this.state.date);
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

// this.handleClick 등 생명주기 이외의 메서드를 사용할 때 함수 안에서 클레스에 직접 접근을 하고싶다면 this binding을 해주어야한다. bind(this)의 this는 this.handleClick에게 나 자신을 알게해줘~의 의미(this.handleClick은 어딘가에 속해있지만 나 자신이 누군지 모름)
// 이 과정은 함수를 추가할 때마다 하면 귀찮으니 화살표 함수로 대체할 수 있다.(화살표 함수는 클래스 컴포넌트 밖의 컨텍스트를 쉐어하기 때문에 this가 누군지 알기 때문)
