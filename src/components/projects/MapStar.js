import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MapStar.css";

const MapStar = () => {
  const navigate = useNavigate();

  // 이미지 배열
  const images = [
    "/images/mapstar/category.jpg",
    "/images/mapstar/category2.jpg",
    "/images/mapstar/default.jpg",
    "/images/mapstar/search1.jpg",
    "/images/mapstar/searchhistory.jpg",
    "/images/mapstar/login.jpg",
    "/images/mapstar/register.jpg",
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
      <div className="maintitle">MapStar Project</div>
      <div className="image-conts">
        <div className="githuburl">Github 바로가기</div>

        <div className="image-container">
          <div className="left-click-area" onClick={handlePrev} />
          <img
            src={images[currentIndex]}
            alt="Mapstar"
            className="MapStar-img-width"
          />
          <div className="right-click-area" onClick={handleNext} />
        </div>
        <div className="webexplanation">
          <span>MapStar-Web은 카카오 API를 기반으로 제작된 지도 서비스</span>
          입니다.
        </div>
        <div className="webexplanationsub">
          새로운 위치를 선정할 때 근처의 다양한 인프라를 한 눈에 확인할 수
          있도록 돕는 웹입니다. <br />
          <br />이 웹을 제작하게 된 동기는 자취 생활 중, 네이버 지도를 자주
          사용하면서 불편함을 느낀 경험에서 시작되었습니다. 자취방을 검색하면서
          근처의 다양한 정보를 확인하려 할 때, 집 주소를 입력하고 그 주변을
          하나하나 훑어보는 과정이 번거로웠습니다.
          <br /> 네이버 지도, 카카오 지도, 구글 지도 등 여러 서비스를 사용해
          보았지만, 각 지도에서 제공하는 카테고리가 중복되지않아 제가 원하는
          정보를 효율적으로 볼 수 없다는 점이 문제였습니다. 이러한 문제를
          해결하고자 MapStar-Web을 제작하게 되었습니다.
        </div>

        <div className="phone-image-container">
          <div className="left-click-area" onClick={phonehandlePrev} />
          <img
            src={phoneimages[currentIndexphone]}
            alt="Mapstar"
            className="MapStar-img-height"
          />
          <div className="right-click-area" onClick={phonehandleNext} />
        </div>
        <div className="phoneexplanation">반응형 디자인 설정</div>
      </div>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>{" "}
    </div>
  );
};

export default MapStar;
