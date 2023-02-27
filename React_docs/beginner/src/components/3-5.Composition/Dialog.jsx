import React from 'react';

// 모든 dialog들이 일괄적으로 동작해야하는 것들을 여기에 넣고 WelcomeDialog같이 커스텀 해야하는 것들은 WelcomeDialog에

export default function Dialog(props) {
  return <div style={{ backgroundColor: 'pink' }}>{props.children}</div>;
}
