import React from 'react';
import { createPortal } from 'react-dom';
import ThankyouDialog from './ThankyouDialog';

// export default function Example() {
//   return (
//     <div>
//       {/* ThankyouDialog 컴포넌트가 위에 있으면 open 버튼을 눌렀을 때 하하하 버튼은 덮어씌워지지 않는다. 뒤에 있는 컴포넌트가 순서상 상위를 차지하기 때문 */}
//       <ThankyouDialog />
//       <div style={{ position: 'absolute' }}>
//         <button>하하하</button>
//       </div>
//       {/* ThankyouDialog 컴포넌트가 아래에 있으면 open 버튼을 눌렀을 때 하하하 버튼은 덮어씌워짐. */}
//       <ThankyouDialog />
//     </div>
//   );
// }
// 위의 예제는 간단해서 레이어를 편하게 바꿀 수 있지만 해당 레이어가 어느 컴포넌트 속에 속에 들어있다면 이미 순차적으로 있는 레이어의 스택을 벗어나기 어렵다. 이럴때 사용하는게 potal

// portal 사용 후
const Portal = (props) => {
  return createPortal(props.children, document.getElementById('portal'));
};

export default function Example() {
  return (
    <div onClick={() => console.log('div')}>
      <Portal>
        <ThankyouDialog />
      </Portal>
      <div style={{ position: 'absolute', margin: 100 }}>
        <button>하하하</button>
      </div>
    </div>
  );
}

// ThankyouDialog 컴포넌트의 open버튼을 눌렀을 때 부모인 div에 onClick이벤트가 발생할까? => YES
// Portal은 root(id='root')의 영역이 아니라 portal의 영역이다.(id='portal') 따라서 Portal의 자식은 이벤트가 일어나면 Portal의 부모한테 이벤트 전파가 되도 root한테 안가는게 맞는데 리액트는 이를 가능하게 해준다. (버블링이 일어남)
// 하하하 버튼(root 영역)을 누르면 콘솔로그에 'div'찍힘 / open 버튼(portal 영역)을 누르면 콘솔로그에 'div'찍힘
// 리액트에서 의도적으로 Portal에 있는 요소이더라도 그 안에서 일어나는 이벤트들을 root에도 같이 전달해주고 있다.
