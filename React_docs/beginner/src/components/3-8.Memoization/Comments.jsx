import React, { useCallback } from 'react';
import CommentItem from './CommentItem';

export default function Comments({ commentList }) {
  const handleClick = useCallback(() => {
    console.log(`눌림`);
  }, []);

  return (
    <div>
      {commentList.map((comment) => (
        <CommentItem
          key={comment.title}
          title={comment.title}
          content={comment.content}
          likes={comment.likes}
          // onClick={() => console.log(`눌림`)}
          onClick={handleClick}
        />
      ))}
    </div>
  );
}

// memo하고 onClick 준 상태 (useCallback 사용 전)
// memo를 했음에도 불구하고 전체가 새로 그려진다. Props가 동일한 상태여야지 메모이제이션이 되는데 함수를 주게되면 렌더링 될 때마다 새로운 함수가 생성되어 새로 그려지게 된다.
// useCallback을 사용하여 해결하자.
/*
actualDuration[comment1: 3.4000000059604645]
actualDuration[comment2: 0.30000001192092896]
actualDuration[comment3: 0.19999998807907104]
actualDuration[comment1: 0.5999999940395355]
actualDuration[comment2: 0.20000001788139343]
actualDuration[comment3: 0.09999999403953552]
actualDuration[comment4: 0.19999998807907104]
actualDuration[comment1: 0.30000001192092896]
actualDuration[comment2: 0.10000002384185791]
actualDuration[comment3: 0.09999999403953552]
actualDuration[comment4: 0.10000002384185791]
actualDuration[comment5: 0.29999998211860657]
actualDuration[comment1: 0.30000001192092896]
actualDuration[comment2: 0.19999998807907104]
actualDuration[comment3: 0.09999999403953552]
actualDuration[comment4: 0]
actualDuration[comment5: 0]
actualDuration[comment6: 0.19999998807907104]
*/

// useCallback 사용 후
/*
actualDuration[comment1: 39]
actualDuration[comment2: 0.5999999940395355]
actualDuration[comment3: 0.5]
actualDuration[comment4: 0.30000001192092896]
actualDuration[comment5: 0.9000000059604645]
actualDuration[comment6: 0.29999998211860657]
actualDuration[comment7: 0.29999998211860657]
actualDuration[comment8: 0.09999999403953552]
actualDuration[comment9: 0.19999998807907104]
actualDuration[comment10: 0.09999999403953552]
actualDuration[comment11: 0.20000001788139343]
actualDuration[comment12: 0.19999998807907104]
actualDuration[comment13: 0.10000002384185791]
actualDuration[comment14: 0.30000001192092896]
actualDuration[comment15: 0.4000000059604645]
 */
