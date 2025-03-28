import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserService.css";

const UserService = () => {
  const navigate = useNavigate();

  // 이미지 배열
  const images = [
    "/images/userservice/메인페이지.JPG",
    "/images/userservice/검색.JPG",
    "/images/userservice/고객추가.JPG",
    "/images/userservice/삭제.JPG",
    "/images/userservice/삭제-1.JPG",
    "/images/userservice/삭제 후 DB처리.JPG",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-detail">
      <div className="usermaintitle">고객관리서비스</div>
      <div className="userintroduction">
        {" "}
        <div className="usernsmaintitlesub">사용자 추가 제거</div>
        <div className="usermaintitlesub">2025.02. ~ 2025.03 </div>
      </div>
      <div className="image-conts">
        <div className="usergithuburl">
          <a
            href="https://github.com/Ahnjunghyeon/React-Management"
            target="_blank"
            rel="noopener noreferrer"
          >
            고객관리서비스 - Github 바로가기
          </a>
        </div>

        <div className="image-container">
          <div className="left-click" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="userweb"
            className="userweb-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
          <div className="right-click" onClick={handleNext}>
            ⮞
          </div>
        </div>
        <div className="skilltitle">💻사용기술</div>
        <div className="userskilletools">
          <img
            src="/images/toolsimage/reactlogo투명.png"
            alt="기술3"
            className="tech-image"
          />
          <img
            src="/images/toolsimage/awslogo투명300.png"
            alt="기술1"
            className="tech-image-aws"
          />
          <img
            src="/images/toolsimage/javascriptlogo투명.png"
            alt="기술4"
            className="tech-image"
          />
          <img
            src="/images/toolsimage/nodejslogo.png"
            alt="기술5"
            className="tech-image"
          />
        </div>
        <div className="webexplanation">
          <span>고객관리서비스는 Youtube의 강의를 보고 만든웹입니다. </span>
        </div>
        <div className="userwebexplanationsub">
          고객 정보 관리 – 고객 목록, 추가, 수정, 삭제 기능 구현
          <br /> 클라우드 DB 연동 – AWS RDS를 활용한 데이터 저장
        </div>
      </div>
      <button className="beforepage" onClick={() => navigate(-1)}>
        이전으로 ⤶
      </button>{" "}
      <button className="userbeforepagebutton" onClick={() => navigate(-1)}>
        이전 페이지로
      </button>
    </div>
  );
};

export default UserService;
