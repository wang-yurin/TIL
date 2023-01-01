// import React from 'react';

// props 설정
// const MyComponent = (props) => {
//   // return <div>하이, 내 이름은 {props.name}</div>;
//   return <div>하이, 내 이름은 {props.children}</div>;
// };

// props 기본값 설정
// MyComponent.defaultProps = {
//   name: '기본 이름',
// };
// export default MyComponent;

// -----------------------------------------------------------

// import React, { Children } from 'react';

// 비구조화할당(구조분해)
// const MyComponent = ({ name, children }) => {
//   return (
//     <div>
//       하이, 내 이름은 {name}
//       <br />
//       children의 값은 {children}이지
//     </div>
//   );
// };

// MyComponent.defaultProps = {
//   name: '기본 이름',
// };
// export default MyComponent;

// -----------------------------------------------------------

// propType을 통한 props 검증
// 필수 props 지정 또는 props의 타입을 지정할 때
import PropTypes from 'prop-types';
const MyComponent = ({ name, children, favoriteNumber }) => {
  return (
    <div>
      하이, 내 이름은 {name}
      <br />
      children의 값은 {children}이지
      <br />
      내가 좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본 이름',
};

MyComponent.propTypes = {
  name: PropTypes.string, // name의 값은 무조건 string 형태로 전달
  favoriteNumber: PropTypes.number.isRequired, // favoriteNumber의 값이 무조건 지정되어있어야함
};

export default MyComponent;
