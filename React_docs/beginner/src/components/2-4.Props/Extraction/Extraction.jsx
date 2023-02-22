import React from 'react';

function formatDate(date) {
  return date.toLocaleDateString();
}

/*
// 1. 컴포넌트 추출 전 초기 상태
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img
          className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
*/

/*
// 2. Avatar 컴포넌트 생성
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}
*/

// 3. UserInfo 컴포넌트 생성
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Text(props) {
  return <div className="Comment-text">{props.text}</div>;
}

function Date(props) {
  return <div className="Comment-date">{formatDate(props.date)}</div>;
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <Text text={props.text} />
      <Date date={props.date} />
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64',
  },
};

export default function Extraction() {
  return (
    <Comment date={comment.date} text={comment.text} author={comment.author} />
  );
}
