import React, { useState } from 'react';

const Item = ({ name, age }) => {
  return (
    <li>
      name: {name} / age: {age}
    </li>
  );
};

const url =
  'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

export default function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json.errorMessage) {
          throw new Error(json.errorMessage);
        }
        // console.log(json);
        setData(json.data);
      })
      .catch((error) => {
        setError(`Something Wrong: ${error}`);
      });
  };

  // 이렇게하면 promise에 응답이 있고 비로 콘솔로 찍어버려 그 응답을 처리하지 않음
  // const handleClick2 = () => {
  //   fetch('/login').then((response) => {
  //     console.log(response.json());
  //   });
  // };

  const handleClick2 = () => {
    fetch('/login')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(JSON.stringify(json));
      });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>데이터 가져오기2</button>
      {data && (
        <ul>
          {data.people.map((person) => (
            <Item
              key={`${person.name}-${person.age}`}
              name={person.name}
              age={person.age}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
