import React from 'react';

function UserGreeting(props) {
  return (
    // <h1>
    //   {props.name}, Welcome It's {props.count} time!
    // </h1>

    // && 연산자를 사용
    // <h1>
    //   {props.name && props.name + ','} Welcome{' '}
    //   {props.count && `It's ${props.count} time!`}
    // </h1>
    // 위에서 count가 1일 때 제대로 그려지는데 0을 주면 의도와 다르게 동작한다. 0은 falsy한 값이기 때문이다. 안전하게 표현하려면 아래와 같이 작성. Boolean(값)을 사용하면 분명하게 true, false 값이 나오기 때문에
    // <h1>
    //   {props.name && props.name + ','} Welcome{' '}
    //   {Boolean(props.count) && `It's ${props.count} time!`}
    // </h1>

    <h1>
      {props.name && props.name + ','} Welcome{' '}
      {props.count ? `It's ${props.count} time!` : null}
    </h1>
  );
}

function GuestGreeting() {
  return <h1>Please sign up!</h1>;
}

function Greeting(props) {
  // if (props.isLoggedIn) {
  //   return <UserGreeting name="yurin" count={0} />;
  // }
  // return <GuestGreeting />;

  return props.isLoggedIn ? (
    <UserGreeting name="yurin" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  // const isLoggedIn = false;
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
