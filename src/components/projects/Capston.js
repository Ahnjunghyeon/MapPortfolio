import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Capston.css";

const Capston = () => {
  const navigate = useNavigate();

  // 이미지 배열
  const images = [
    "/images/capston/캡스톤3.jpg",
    "/images/capston/캡스톤6.jpg",
    "/images/capston/캡스톤7.jpg",
    "/images/capston/캡스톤8.jpg",
    "/images/capston/캡스톤9.jpg",
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
      <div className="capstonmaintitle">캡스톤 디자인</div>
      <div className="userintroduction">
        {" "}
        <div className="usernsmaintitlesub">쇼핑 웹</div>
        <div className="usermaintitlesub">2023.10. ~ 2023.11 </div>
      </div>
      <div className="image-conts">
        <div className="usergithuburl">
          <a
            href="https://github.com/Ahnjunghyeon/2023capston"
            target="_blank"
            rel="noopener noreferrer"
          >
            캡스톤디자인 - Github 바로가기
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
            alt="기술1"
            className="tech-image"
          />
          <img
            src="/images/toolsimage/vitelogo.png"
            alt="기술2"
            className="tech-image"
          />
          <img
            src="/images/toolsimage/javascriptlogo투명.png"
            alt="기술3"
            className="tech-image"
          />
        </div>

        <div className="capstonwebexplanationsub">주제 : 쇼핑몰 웹</div>
        <div className="capstonwebexplanationsub1">
          학교에서 Python, C, Java를 배우던 중, 교수님의 추천으로 React를 접하게
          되었고,
          <br /> 이를 활용해 쇼핑몰 웹사이트를 제작하기로 결정했습니다.
        </div>
        <div className="team">
          {" "}
          🧑 팀원 <br />
          <div className="teamlist"> 안중현 : FrontEnd - React / 발표</div>
          <div className="teamlist1"> 김영완 : Backend - Vite, React </div>
        </div>
      </div>
      <button className="beforepage" onClick={() => navigate(-1)}>
        이전으로 ⤶
      </button>{" "}
      <button className="beforepagebutton" onClick={() => navigate(-1)}>
        이전 페이지로
      </button>{" "}
    </div>
  );
};

export default Capston;
