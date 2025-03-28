import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Snsweb.css";

const Snsweb = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 이미지 배열
  const images = [
    "/images/snsweb/post_like_comment.jpg",
    "/images/snsweb/expost.jpg",
    "/images/snsweb/direct.jpg",
    "/images/snsweb/Notification.jpg",
    "/images/snsweb/loginwithgoogle.jpg",
    "/images/snsweb/follow.jpg",
    "/images/snsweb/profile.jpg",
  ];
  const phoneimages = [
    "/images/snsweb/phonehome.jpg",
    "/images/snsweb/phoneuploda.jpg",
    "/images/snsweb/phoneprofile.jpg",
    "/images/snsweb/phonefollow.jpg",
    "/images/snsweb/phonedirect.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexphone, setCurrentIndexphone] = useState(0);

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

  const phonehandlePrev = () => {
    setCurrentIndexphone((prevIndexphone) =>
      prevIndexphone === 0 ? phoneimages.length - 1 : prevIndexphone - 1
    );
  };

  const phonehandleNext = () => {
    setCurrentIndexphone((prevIndexphone) =>
      prevIndexphone === phoneimages.length - 1 ? 0 : prevIndexphone + 1
    );
  };

  return (
    <div className="project-detail">
      <div className="snsmaintitle">SNS-WEB</div>
      <div className="snsintroduction">
        {" "}
        <div className="snsmaintitlesub">SNS 서비스</div>
        <div className="snsmaintitlesub">2024.06. ~ 2024.08 </div>
      </div>
      <div className="image-conts">
        <div className="snsgithuburl">
          <a
            href="https://github.com/Ahnjunghyeon/test-login"
            target="_blank"
            rel="noopener noreferrer"
          >
            SNS - Github 바로가기
          </a>
        </div>

        <div className="image-container">
          <div className="left-click" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="Snsweb"
            className="Snsweb-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
          <div className="right-click" onClick={handleNext}>
            ⮞
          </div>
        </div>
        <div className="skilltitle">💻사용기술</div>
        <div className="snsskilletools">
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
          <img
            src="/images/toolsimage/nodejslogo.png"
            alt="기술5"
            className="tech-image"
          />
        </div>
        <div className="webexplanation">
          <span>SNS-Web은 </span>
        </div>
        <div className="snswebexplanationsub">
          평소 자주 사용하는 Instagram을 클론 코딩이 아닌, 제 방식대로 해석하여
          나만의 방식으로 구현해본 웹입니다. 이 웹을 개발한 목적은 저 자신의
          개발 실력을 증진하고, 웹 구조를 설계하는 것에 대한 공부를 하기
          위해서입니다
        </div>
        <div className="snswebexplanationsub">
          주요기능으로는
          <br />- 서로 유저간 팔로우기능
          <br />- 게시물의 업로드, 수정 및 삭제
          <br />- 댓글추가, 수정 및 상제
          <br /> - 상대방의 프로필 검색
          <br />- 유저간 다이렉트메세지
          <br />- 이벤트 발생 시, 알림메세지
          <br />
          등이 있습니다.
        </div>

        <div className="phone-image-container">
          <div className="left-click-ph" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area-ph" onClick={phonehandlePrev} />
          <img
            src={phoneimages[currentIndexphone]}
            alt="Snsweb"
            className="Snsweb-img-height"
          />
          <div className="right-click-area-ph" onClick={phonehandleNext} />
          <div className="right-click-ph" onClick={phonehandleNext}>
            ⮞
          </div>
        </div>
        <div className="phoneexplanation">반응형 디자인</div>
      </div>
      <button className="beforepage" onClick={() => navigate(-1)}>
        이전으로 ⤶
      </button>{" "}
    </div>
  );
};

export default Snsweb;
