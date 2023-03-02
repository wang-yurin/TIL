import React from 'react';
import Dialog from './Dialog';

export default function ThankyouDialog() {
  // return (
  //   <Dialog
  //     title="Thanks"
  //     description="It is honor to meet you"
  //     button="close"
  //   />
  // );

  return (
    <Dialog
      title={<h1 style={{ color: 'purple' }}>Thanks</h1>}
      description="It is honor to meet you"
      button={
        <button style={{ backgroundColor: 'lightblue', color: 'white' }}>
          close
        </button>
      }
    />
  );
}
