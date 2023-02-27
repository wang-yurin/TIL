import React, { memo, Profiler, useMemo, useState } from 'react';
import './CommentItem.css';

function CommentItem({ title, content, likes, onClick }) {
  const [clickCount, setClickCount] = useState(0);

  function onRenderCallback(
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) {
    // 렌더링 타이밍을 집합하거나 로그...
    console.log(`actualDuration[${title}: ${actualDuration}]`);
  }

  const handleClick = () => {
    onClick();
    setClickCount((prev) => prev + 1);
    alert(`${title} 눌림!`);
  };

  // const rate = () => {
  //   console.log(`rate check`);
  //   return likes > 10 ? 'Good' : 'Bad';
  // };

  const rate = useMemo(() => {
    console.log(`rate check`);
    return likes > 10 ? 'Good' : 'Bad';
  }, [likes]);

  return (
    <Profiler id="CommentItem" onRender={onRenderCallback}>
      <div className="CommentItem" onClick={handleClick}>
        <span>{title}</span>
        <br />
        <span>{content}</span>
        <br />
        <span>{likes}</span>
        <br />
        {/* <span>{rate()}</span> */}
        <span>{rate}</span>
        <br />
        <span>{clickCount}</span>
      </div>
    </Profiler>
  );
}

// export default CommentItem;
export default memo(CommentItem);

// memo하지 않았을 때 log (onClick 주기 전)
// 하나의 컴포넌트가 추가될 때마다 모든 컴포넌트가 새로 그려짐(123, 1234, 12345, 123456, 1234567...)
/*
actualDuration[comment1: 3.699999988079071]
actualDuration[comment2: 0.4000000059604645]
actualDuration[comment3: 0.4000000059604645]
actualDuration[comment1: 0.5999999940395355]
actualDuration[comment2: 0.09999999403953552]
actualDuration[comment3: 0.19999998807907104]
actualDuration[comment4: 0.5999999940395355]
actualDuration[comment1: 0.20000001788139343]
actualDuration[comment2: 0.19999998807907104]
actualDuration[comment3: 0.19999998807907104]
actualDuration[comment4: 0.09999999403953552]
actualDuration[comment5: 0.29999998211860657]
actualDuration[comment1: 0]
actualDuration[comment2: 0.09999999403953552]
actualDuration[comment3: 0.09999999403953552]
actualDuration[comment4: 0.09999999403953552]
actualDuration[comment5: 0]
actualDuration[comment6: 0.19999998807907104]
 */

// memo했을 때 log (onClick 주기 전)
/*
actualDuration[comment1: 4.9000000059604645]
actualDuration[comment2: 1.2000000178813934]
actualDuration[comment3: 0.5]
actualDuration[comment4: 0.4000000059604645]
actualDuration[comment5: 0.29999998211860657]
actualDuration[comment6: 0.19999998807907104]
actualDuration[comment7: 0.30000001192092896]
actualDuration[comment8: 0.09999999403953552]
actualDuration[comment9: 0.19999998807907104]
actualDuration[comment10: 0.20000001788139343]
actualDuration[comment11: 0.09999999403953552]
actualDuration[comment12: 0.19999998807907104]
actualDuration[comment13: 0.30000001192092896]
actualDuration[comment14: 0.09999999403953552]
actualDuration[comment15: 0.19999998807907104]
actualDuration[comment16: 0.20000001788139343]
actualDuration[comment17: 0.20000001788139343]
*/

// useMemo 사용 전 comment3을 눌렀을 때 rate check가 함께 불려진다 (✅)
/*
rate check
rate check
rate check
actualDuration[comment1: 11]
actualDuration[comment2: 0.699999988079071]
actualDuration[comment3: 0.800000011920929]
눌림 ✅
rate check ✅
actualDuration[comment3: 0.9000000059604645] ✅
rate check
actualDuration[comment4: 0.5]
눌림 ✅
rate check ✅
actualDuration[comment3: 0.3999999761581421] ✅
눌림 ✅
rate check ✅
actualDuration[comment3: 0.19999998807907104] ✅
rate check
actualDuration[comment5: 0.3999999761581421]
rate check
actualDuration[comment6: 0.19999998807907104]
*/

// useMemo 사용 후
/*
rate check
rate check
rate check
actualDuration[comment1: 4.4000000059604645]
actualDuration[comment2: 0.5]
actualDuration[comment3: 0.5]
눌림 ✅
actualDuration[comment3: 1.2999999821186066] ✅
rate check
actualDuration[comment4: 0.29999998211860657]
눌림 ✅
actualDuration[comment3: 0.19999998807907104] ✅
rate check
actualDuration[comment5: 0.5]
rate check
actualDuration[comment6: 0.30000001192092896]
rate check
*/
