import React from 'react';

export default function List() {
  // const numbers = [1, 2, 3, 4, 5];
  // return (
  //   <ul>
  //     {numbers.map((item) => (
  //       <li key={item.toString()}>{item}</li>
  //     ))}
  //   </ul>
  // );

  const todos = [
    { id: 1, text: 'Drink water' },
    { id: 2, text: 'Wash car' },
    { id: 3, text: 'Listen Lecture' },
    { id: 4, text: 'Go to bed' },
  ];

  // return (
  //   <ul>
  //     {todos.map((todo) => (
  //       <li key={todo.id}>{todo.text}</li>
  //     ))}
  //   </ul>
  // );

  // const Item = (props) => {
  //   return <li>{props.text}</li>;
  // };

  // const todoList = todos.map((todo) => <Item {...todo} key={todo.id} />);

  // return <>{todoList}</>;

  // 자식에게 key props가 전달이 될까? => NO!
  // 아래와 같이 {props.key} 작성하면 Warning: Item: `key` is not a prop... 에러가 뜬다.
  // key라는 값은 리액트에서 엘리먼트가 특정한지 고유성만 판단하는 것이지 자식에게 이 값을 전달하지 않는다. (key는 props가 아니다.)
  // 이 값을 쓰고싶다면 key가 아닌 다른 값으로 전달해야한다. ex) id={todo.id}
  const Item = (props) => {
    return (
      <li>
        {props.text}
        {props.key}
        {props.id}
      </li>
    );
  };

  const todoList = todos.map((todo) => (
    <Item key={todo.id} id={todo.id} text={todo.text} />
  ));

  return <>{todoList}</>;
}
