import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MapStar.css";

const MapStar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 이미지 배열
  const images = [
    "/images/mapstar/category.jpg",
    "/images/mapstar/category2.jpg",
    "/images/mapstar/default.jpg",
    "/images/mapstar/search1.jpg",
    "/images/mapstar/searchhistory.jpg",
    "/images/mapstar/login.jpg",
    "/images/mapstar/register.jpg",
    "/images/mapstar/데이터베이스-1.jpg",
    "/images/mapstar/실제 앱.jpg",
  ];
  const phoneimages = [
    "/images/mapstar/phonedefault.png",
    "/images/mapstar/phonecategory.png",
    "/images/mapstar/phonesearch.png",
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
      <div className="maintitle">MapStar</div>
      <div className="introduction">
        {" "}
        <div className="maintitlesub">지도 한눈에 볼 수 있는 인프라 서비스</div>
        <div className="maintitlesub">2025.03.07 ~ 2025.03.19 </div>
      </div>
      <div className="image-conts">
        <div className="githuburl">
          <a
            href="https://github.com/Ahnjunghyeon/Mapstar"
            target="_blank"
            rel="noopener noreferrer"
          >
            MapStar - Github 바로가기
          </a>
        </div>
        <div className="image-container">
          <div className="left-click" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="Mapstar"
            className="MapStar-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
          <div className="right-click" onClick={handleNext}>
            ⮞
          </div>
        </div>
        <div className="skilltitle">💻사용기술</div>
        <div className="skilletools">
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
          <img
            src="/images/toolsimage/Heidisqllogo-1.png"
            alt="기술6"
            className="tech-image"
          />
          <img
            src="/images/toolsimage/mysqllogo.png"
            alt="기술7"
            className="tech-image"
          />
        </div>
        <div className="webexplanation">
          <span>MapStar-Web은 카카오 API를 기반으로 제작된 인프라 서비스</span>
          입니다.
        </div>
        <div className="webexplanationsub">
          새로운 위치를 선정할 때, 주변 인프라를 한눈에 확인할 수 있도록 돕는
          웹입니다.
        </div>
        <div className="webexplanationsub">
          초기 지도는 서울로 설정되어 있으며, 사용자가 특정 위치를 선택하면
          마커가 변경됩니다.
          <br />
          또한, `panTo()`를 활용하여 자연스럽게 지도 이동이 이루어지도록
          구현하였습니다.t
        </div>
        <div className="webexplanationsub">
          검색 기능과 검색 기록 조회, 지도 크기 자동 조정 및 초기화 기능을
          추가하였으며,
          <br />
          마지막으로 반응형 디자인을 적용하였습니다.
          <br /> +추가로 사진에 보이는 앱은 재미로 AI툴을 이용해서 간단하게
          어플로 만들어봤습니다 --
        </div>
        <div className="webexplanationsub">
          개발 동기 : 평소 자주 사용하는 지도앱과, 자취방을 구하는 경험을 토대로{" "}
          <br />
          이러한 인프라를 한번에 볼 수 있는 기능이 있으면 좋겠다는 생각을 갖고
          WEB을 제작했습니다.
        </div>

        <div className="phone-image-container">
          <div className="left-click-ph" onClick={handlePrev}>
            ⮜
          </div>
          <div className="left-click-area-ph" onClick={phonehandlePrev} />
          <img
            src={phoneimages[currentIndexphone]}
            alt="Mapstar"
            className="MapStar-img-height"
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

export default MapStar;
