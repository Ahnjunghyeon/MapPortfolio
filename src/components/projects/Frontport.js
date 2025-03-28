import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Frontport.css";

const Frontport = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    "/images/frontport/프론트앤드개발자포트폴리오.jpg",
    "/images/frontport/프론트앤드개발자포트폴리오1.jpg",
    "/images/frontport/프론트앤드개발자포트폴리오2.jpg",
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
      <div className="frontmaintitle">프론트앤드 포트폴리오</div>
      <div className="frontintroduction">
        {" "}
        <div className="frontmaintitlesub">개발 내용 총정리</div>
        <div className="frontmaintitlesub">2025.03. ~ 2025.03 </div>
      </div>
      <div className="image-conts">
        <div className="frontgithuburl">
          <a
            href="https://github.com/Ahnjunghyeon/MapPortfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            포트폴리오 - Github 바로가기
          </a>
        </div>

        <div className="image-container">
          <div className="left-click" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="frontweb"
            className="frontweb-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
          <div className="right-click" onClick={handleNext}>
            ⮞
          </div>
        </div>
        <div className="skilltitle">💻사용기술</div>
        <div className="userskilletools">
          <img
            src="/images/toolsimage/firebaselogo.png"
            alt="기술2"
            className="tech-image"
          />
          <img
            src="/images/toolsimage/reactlogo투명.png"
            alt="기술3"
            className="tech-image"
          />

          <img
            src="/images/toolsimage/javascriptlogo투명.png"
            alt="기술4"
            className="tech-image"
          />
        </div>

        <div className="frontwebexplanationsub">
          React를 활용하여 scroll 및 link 기능을 적용해 화면 이동을 부드럽게
          구현하였으며,
          <br /> react-router-dom을 사용하여 페이지 전환이 가능하도록
          만들었습니다. <br />
          가장 많이 사용하며 개발한 기술이 React + JavaScript이기 때문에, 디자인
          작업도 재미있게 진행할 수 있었습니다. <br />웹 호스팅은 Firebase를
          이용하여 배포하였습니다.
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

export default Frontport;
