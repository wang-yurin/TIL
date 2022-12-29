import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  yurin: {
    name: '왕유린',
    description: '완전 멋진 프론트엔드 개발자',
  },
  wang: {
    name: '왕',
    description: '리액트 러버 개발자',
  },
};

const Profile = () => {
  const params = useParams();
  console.log(params);
  const profile = data[params.username];
  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
