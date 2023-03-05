import React from 'react';
import PropTypes from 'prop-types';

function PropComponent(props) {
  return <div>{props.name}</div>;
}

PropComponent.defaultProps = {
  name: 'Wang',
  // age: '7',
  age: 8,
  // age: 30,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  // age: PropTypes.number.isRequired,
  // age가 30이 아니면 에러인 함수
  age: function (props, propName, componentName) {
    if (!/30/.test(props[propName])) {
      return new Error(
        'Invalid prop `' +
          propName +
          '` supplied to' +
          ' `' +
          componentName +
          '`. Validation failed.'
      );
    }
  },
};

export default function Component() {
  return (
    <div>
      <PropComponent />
    </div>
  );
}
