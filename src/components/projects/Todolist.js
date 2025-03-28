import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Todolist.css";

const Todolist = () => {
  const navigate = useNavigate();

  // 이미지 배열
  const images = [
    "/images/todolist/todolist1.JPG",
    "/images/todolist/todolist2.JPG",
    "/images/todolist/todolist3.JPG",
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
      <div className="todomaintitle">고객관리서비스</div>
      <div className="todointroduction">
        {" "}
        <div className="todonsmaintitlesub">할일 추가 및 제거</div>
        <div className="todomaintitlesub">2024.03. ~ 2024.04 </div>
      </div>
      <div className="image-conts">
        <div className="todogithuburl">
          <a
            href="https://github.com/Ahnjunghyeon/todo-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            투두리스트 - Github 바로가기
          </a>
        </div>

        <div className="image-container">
          <div className="left-click" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="todoweb"
            className="todoweb-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
          <div className="right-click" onClick={handleNext}>
            ⮞
          </div>
        </div>
        <div className="skilltitle">💻사용기술</div>
        <div className="todoskilletools">
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
        <div className="webexplanation">
          <span>Todolist는 Youtube의 강의를 보고 만든웹입니다. </span>
        </div>
        <div className="todowebexplanationsub">
          개인 정보 관리 – 구글 로그인서비스, 할일 추가, 체크, 삭제 기능 구현
          <br /> firebase DB 연동 + firebas auth : google로그인
        </div>
      </div>
      <button className="beforepage" onClick={() => navigate(-1)}>
        이전으로 ⤶
      </button>{" "}
      <button className="todobeforepagebutton" onClick={() => navigate(-1)}>
        이전 페이지로
      </button>
    </div>
  );
};

export default Todolist;
