import React from "react";
import { useNavigate } from "react-router-dom";

const UserSevice = () => {
  const navigate = useNavigate();

  return (
    <div className="project-detail">
      <h2>UserSevice 프로젝트</h2>
      <p>
        이 프로젝트는 지도 기반의 기능을 제공하며, 사용자가 지역을 선택하여
        다양한 정보를 확인할 수 있습니다.
      </p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
};

export default UserSevice;
